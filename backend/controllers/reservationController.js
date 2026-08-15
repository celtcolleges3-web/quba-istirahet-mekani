const Reservation = require("../models/Reservation");
const axios = require("axios");

/* =====================================================
   RESERVATION NUMBER
===================================================== */

function generateReservationNumber() {
    const randomNumber =
        Math.floor(100000 + Math.random() * 900000);

    return `QUBA-${randomNumber}`;
}


/* =====================================================
   TELEGRAM MESSAGE
===================================================== */

async function sendTelegramMessage(reservation) {

    const botToken =
        process.env.TELEGRAM_BOT_TOKEN;

    const chatId =
        process.env.TELEGRAM_CHAT_ID;


    /* ---------------------------------------------
       TELEGRAM CONFIG VALIDATION
    --------------------------------------------- */

    if (!botToken || !chatId) {

        throw new Error(
            "Telegram bot token və ya chat ID backend .env faylında yoxdur."
        );
    }


    /* ---------------------------------------------
       DATE FORMAT
    --------------------------------------------- */

    const checkIn =
        new Date(reservation.checkIn)
            .toLocaleDateString("az-AZ");

    const checkOut =
        new Date(reservation.checkOut)
            .toLocaleDateString("az-AZ");


    /* ---------------------------------------------
       TELEGRAM MESSAGE
    --------------------------------------------- */

    const message = `
🏨 YENİ REZERVASİYA

🔖 Rezervasiya №: ${reservation.reservationNumber}

👤 Ad və soyad: ${reservation.guestName}

📞 Telefon: ${reservation.phone}

🛏 Otaq: ${reservation.roomType}

👥 Qonaq sayı: ${reservation.guestCount}

📅 Giriş: ${checkIn}

📅 Çıxış: ${checkOut}

📌 Status: ${reservation.status}
`;


    /* ---------------------------------------------
       TELEGRAM API
    --------------------------------------------- */

    const telegramUrl =
        `https://api.telegram.org/bot${botToken}/sendMessage`;


    try {

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

    } catch (error) {

        console.error(
            "Telegram API error:",
            error.response?.data ||
            error.message
        );

        throw new Error(
            error.response?.data?.description ||
            error.message ||
            "Telegram mesajı göndərilə bilmədi."
        );
    }
}


/* =====================================================
   CREATE RESERVATION
===================================================== */

const createReservation = async (req, res) => {

    let reservation = null;

    try {

        const {
            guestName,
            phone,
            roomType,
            guestCount,
            checkIn,
            checkOut,
            specialRequest
        } = req.body;


        /* ---------------------------------------------
           VALIDATION
        --------------------------------------------- */

        if (
            !guestName ||
            !phone ||
            !roomType ||
            !guestCount ||
            !checkIn ||
            !checkOut
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Bütün məcburi rezervasiya məlumatlarını doldurun."
            });
        }


        /* ---------------------------------------------
           GUEST COUNT VALIDATION
        --------------------------------------------- */

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


        /* ---------------------------------------------
           DATE VALIDATION
        --------------------------------------------- */

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


        if (checkOutDate <= checkInDate) {

            return res.status(400).json({

                success: false,

                message:
                    "Çıxış tarixi giriş tarixindən sonra olmalıdır."
            });
        }


        /* ---------------------------------------------
           CREATE CONFIRMED RESERVATION
        --------------------------------------------- */

        reservation =
            await Reservation.create({

                reservationNumber:
                    generateReservationNumber(),

                guestName:
                    guestName.trim(),

                phone:
                    phone.trim(),

                roomType:
                    roomType.trim(),

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

                /*
                 * IMPORTANT:
                 * User pressed CONFIRM,
                 * therefore reservation is CONFIRMED.
                 */
                status: "Confirmed"
            });


        console.log(
            `Reservation created: ${reservation.reservationNumber}`
        );


        /* ---------------------------------------------
           SEND TELEGRAM
        --------------------------------------------- */

        try {

            await sendTelegramMessage(
                reservation
            );

        } catch (telegramError) {

            console.error(
                "Telegram notification failed:",
                telegramError.message
            );


            /*
             * IMPORTANT:
             *
             * Telegram göndərilməyibsə frontend-ə
             * success qaytarmırıq.
             *
             * Reservation MongoDB-də saxlanılır ki,
             * məlumat itməsin.
             */

            return res.status(502).json({

                success: false,

                message:
                    "Rezervasiya yaradıldı, lakin Telegram bildirişi göndərilmədi. Zəhmət olmasa yenidən cəhd edin və ya administratorla əlaqə saxlayın.",

                telegramError:
                telegramError.message,

                reservationId:
                reservation._id
            });
        }


        /* ---------------------------------------------
           FINAL SUCCESS RESPONSE
        --------------------------------------------- */

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

                status:
                reservation.status
            }

        });

    } catch (error) {

        console.error(
            "Reservation error:",
            error
        );


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