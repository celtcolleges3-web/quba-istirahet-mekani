const Reservation = require("../models/Reservation");
const axios = require("axios");

/* =====================================================
   GENERATE RESERVATION NUMBER
===================================================== */

function generateReservationNumber() {
    const randomNumber =
        Math.floor(100000 + Math.random() * 900000);

    return `QUBA-${randomNumber}`;
}


/* =====================================================
   SEND TELEGRAM
===================================================== */

async function sendTelegramMessage(reservation) {

    const botToken =
        process.env.TELEGRAM_BOT_TOKEN;

    const chatId =
        process.env.TELEGRAM_CHAT_ID;


    if (!botToken || !chatId) {

        throw new Error(
            "TELEGRAM_BOT_TOKEN və ya TELEGRAM_CHAT_ID .env faylında yoxdur."
        );
    }


    const checkIn =
        new Date(reservation.checkIn)
            .toLocaleDateString("az-AZ");

    const checkOut =
        new Date(reservation.checkOut)
            .toLocaleDateString("az-AZ");


    const message =
        `🏨 YENİ REZERVASİYA

🔖 Rezervasiya №: ${reservation.reservationNumber}

👤 Ad və soyad: ${reservation.guestName}

📞 Telefon: ${reservation.phone}

🛏 Otaq: ${reservation.roomType}

👥 Qonaq sayı: ${reservation.guestCount}

📅 Giriş: ${checkIn}

📅 Çıxış: ${checkOut}

📌 Status: ${reservation.status}`;


    const telegramUrl =
        `https://api.telegram.org/bot${botToken}/sendMessage`;


    const response =
        await axios.post(
            telegramUrl,
            {
                chat_id: chatId,
                text: message
            },
            {
                timeout: 10000
            }
        );


    if (
        !response.data ||
        response.data.ok !== true
    ) {

        throw new Error(
            response.data?.description ||
            "Telegram mesajı göndərilmədi."
        );
    }


    console.log(
        "Telegram notification sent successfully."
    );

    return true;
}


/* =====================================================
   CREATE RESERVATION
===================================================== */

const createReservation = async (req, res) => {

    try {

        /* =================================================
           READ REQUEST
        ================================================= */

        const {
            guestName,
            phone,
            roomType,
            guestCount,
            checkIn,
            checkOut,
            specialRequest
        } = req.body;


        console.log(
            "RESERVATION REQUEST:",
            req.body
        );


        /* =================================================
           REQUIRED FIELD VALIDATION
        ================================================= */

        if (
            !guestName ||
            !String(guestName).trim() ||
            !phone ||
            !String(phone).trim() ||
            !roomType ||
            !String(roomType).trim() ||
            guestCount === undefined ||
            guestCount === null ||
            !checkIn ||
            !checkOut
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Bütün məcburi rezervasiya məlumatlarını doldurun."
            });
        }


        /* =================================================
           GUEST COUNT
        ================================================= */

        const parsedGuestCount =
            Number(guestCount);


        if (
            !Number.isInteger(parsedGuestCount) ||
            parsedGuestCount < 1
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Qonaq sayı düzgün daxil edilməyib."
            });
        }


        /* =================================================
           DATE
        ================================================= */

        const checkInDate =
            new Date(checkIn);

        const checkOutDate =
            new Date(checkOut);


        if (
            Number.isNaN(checkInDate.getTime()) ||
            Number.isNaN(checkOutDate.getTime())
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Giriş və çıxış tarixləri düzgün deyil."
            });
        }


        /* =================================================
           DATE ORDER
        ================================================= */

        if (checkOutDate <= checkInDate) {

            return res.status(400).json({

                success: false,

                message:
                    "Çıxış tarixi giriş tarixindən sonra olmalıdır."
            });
        }


        /* =================================================
           CREATE MONGODB RESERVATION
        ================================================= */

        const reservation =
            await Reservation.create({

                reservationNumber:
                    generateReservationNumber(),

                guestName:
                    String(guestName).trim(),

                phone:
                    String(phone).trim(),

                roomType:
                    String(roomType).trim(),

                guestCount:
                parsedGuestCount,

                checkIn:
                checkInDate,

                checkOut:
                checkOutDate,

                specialRequest:
                    specialRequest
                        ? String(specialRequest).trim()
                        : "",

                status:
                    "Confirmed"
            });


        console.log(
            "RESERVATION CREATED:",
            reservation.reservationNumber
        );


        /* =================================================
           TELEGRAM
        ================================================= */

        await sendTelegramMessage(
            reservation
        );


        /* =================================================
           SUCCESS
        ================================================= */

        return res.status(201).json({

            success: true,

            message:
                "Rezervasiya uğurla təsdiqləndi.",

            reservation: {

                id:
                reservation._id,

                reservationNumber:
                reservation.reservationNumber,

                guestName:
                reservation.guestName,

                phone:
                reservation.phone,

                roomType:
                reservation.roomType,

                guestCount:
                reservation.guestCount,

                checkIn:
                reservation.checkIn,

                checkOut:
                reservation.checkOut,

                specialRequest:
                reservation.specialRequest,

                status:
                reservation.status
            }
        });

    } catch (error) {

        console.error(
            "CREATE RESERVATION ERROR:",
            error
        );


        /* =================================================
           TELEGRAM ERROR
        ================================================= */

        if (
            error.response &&
            error.response.data &&
            error.response.data.description
        ) {

            return res.status(502).json({

                success: false,

                message:
                    "Rezervasiya yaradıldı, lakin Telegram bildirişi göndərilmədi.",

                error:
                error.response.data.description
            });
        }


        /* =================================================
           MONGODB / SERVER ERROR
        ================================================= */

        return res.status(500).json({

            success: false,

            message:
                "Rezervasiya yaradılarkən server xətası baş verdi.",

            error:
                process.env.NODE_ENV === "production"
                    ? undefined
                    : error.message
        });
    }
};


/* =====================================================
   EXPORT
===================================================== */

module.exports = {
    createReservation
};