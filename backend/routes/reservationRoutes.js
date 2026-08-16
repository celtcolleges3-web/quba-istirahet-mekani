const express = require("express");

const router = express.Router();

const {
    createReservation
} = require("../controllers/reservationController");


/* =====================================================
   CREATE RESERVATION
===================================================== */

router.post(
    "/",
    createReservation
);


/* =====================================================
   EXPORT ROUTER
===================================================== */

module.exports = router;