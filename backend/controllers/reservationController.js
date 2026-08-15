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
       Telegram məlumatları yoxdursa
    --------------------------------------------- */

    if (!botToken || !chatId) {

        console.log(
            "Telegram məlumatları .env-də tapılmadı."
        );

        return;
    }


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

📅 Giriş: ${reservation.checkIn.toLocaleDateString("az-AZ")}

📅 Çıxış: ${reservation.checkOut.toLocaleDateString("az-AZ")}

📌 Status: ${reservation.status}
`;


    /* ---------------------------------------------
       SEND TO TELEGRAM
    --------------------------------------------- */

    const telegramUrl =
        `https://api.telegram.org/bot${botToken}/sendMessage`;


    await axios.post(
        telegramUrl,
        {
            chat_id: chatId,
            text: message
        }
    );


    console.log(
        "Telegram notification sent successfully."
    );
}


/* =====================================================
   CREATE RESERVATION
===================================================== */

const createReservation = async (req, res) => {

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
                    "Bütün məcburi məlumatları doldurun."
            });
        }


        /* ---------------------------------------------
           CREATE RESERVATION
        --------------------------------------------- */

        const reservation =
            await Reservation.create({

                reservationNumber:
                    generateReservationNumber(),

                guestName,

                phone,

                roomType,

                guestCount,

                checkIn,

                checkOut,

                specialRequest:
                    specialRequest || "",

                status: "Pending"
            });


        /* ---------------------------------------------
           TELEGRAM

           MongoDB-dən sonra göndərilir.
        --------------------------------------------- */

        try {

            await sendTelegramMessage(
                reservation
            );

        } catch (telegramError) {

            console.error(
                "Telegram notification error:",
                telegramError.message
            );

            /*
             * Telegram işləməsə belə
             * rezervasiya MongoDB-də qalır.
             */
        }


        /* ---------------------------------------------
           RESPONSE
        --------------------------------------------- */

        res.status(201).json({

            success: true,

            message:
                "Rezervasiya uğurla yaradıldı.",

            reservation

        });


    } catch (error) {

        console.error(
            "Reservation error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                "Rezervasiya yaradılarkən xəta baş verdi."
        });
    }
};


/* =====================================================
   EXPORT
===================================================== */

module.exports = {
    createReservation
};