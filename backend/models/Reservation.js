const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
    {
        reservationNumber: {
            type: String,
            required: true,
            unique: true
        },

        guestName: {
            type: String,
            required: true,
            trim: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        roomType: {
            type: String,
            required: true,
            trim: true
        },

        guestCount: {
            type: Number,
            required: true,
            min: 1
        },

        checkIn: {
            type: Date,
            required: true
        },

        checkOut: {
            type: Date,
            required: true
        },

        specialRequest: {
            type: String,
            default: "",
            trim: true
        },

        status: {
            type: String,
            enum: ["Pending", "Confirmed", "Cancelled"],
            default: "Pending"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Reservation", reservationSchema);