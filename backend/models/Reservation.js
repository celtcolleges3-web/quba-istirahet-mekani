const mongoose = require("mongoose");

/* =====================================================
   RESERVATION SCHEMA
===================================================== */

const reservationSchema = new mongoose.Schema(
    {

        /* =================================================
           RESERVATION NUMBER
        ================================================= */

        reservationNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },


        /* =================================================
           GUEST NAME
        ================================================= */

        guestName: {
            type: String,
            required: true,
            trim: true
        },


        /* =================================================
           PHONE
        ================================================= */

        phone: {
            type: String,
            required: true,
            trim: true
        },


        /* =================================================
           ROOM TYPE
        ================================================= */

        roomType: {
            type: String,
            required: true,
            trim: true
        },


        /* =================================================
           GUEST COUNT
        ================================================= */

        guestCount: {
            type: Number,
            required: true,
            min: 1
        },


        /* =================================================
           CHECK-IN
        ================================================= */

        checkIn: {
            type: Date,
            required: true
        },


        /* =================================================
           CHECK-OUT
        ================================================= */

        checkOut: {
            type: Date,
            required: true
        },


        /* =================================================
           SPECIAL REQUEST
        ================================================= */

        specialRequest: {
            type: String,
            default: "",
            trim: true
        },


        /* =================================================
           STATUS
        ================================================= */

        status: {
            type: String,

            enum: [
                "Pending",
                "Confirmed",
                "Cancelled"
            ],

            default: "Pending"
        }

    },

    /* =====================================================
       TIMESTAMPS
    ===================================================== */

    {
        timestamps: true
    }
);


/* =====================================================
   EXPORT
===================================================== */

module.exports =
    mongoose.model(
        "Reservation",
        reservationSchema
    );