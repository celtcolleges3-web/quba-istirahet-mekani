const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


const connectDB =
    require("./config/db");

const reservationRoutes =
    require("./routes/reservationRoutes");


/* =====================================================
   ENVIRONMENT
===================================================== */

dotenv.config();


/* =====================================================
   APP
===================================================== */

const app =
    express();


/* =====================================================
   DATABASE
===================================================== */

void connectDB();


/* =====================================================
   MIDDLEWARE
===================================================== */

app.use(
    cors()
);

app.use(
    express.json()
);


/* =====================================================
   ROUTES
===================================================== */

app.use(
    "/api/reservations",
    reservationRoutes
);


/* =====================================================
   HEALTH CHECK
===================================================== */

app.get(
    "/",
    (req, res) => {

        res.status(200).json({

            success: true,

            message:
                "Quba Istirahet Mekani API is running"
        });
    }
);


/* =====================================================
   404
===================================================== */

app.use(
    (req, res) => {

        res.status(404).json({

            success: false,

            message:
                "API endpoint tapılmadı."
        });
    }
);

/* =====================================================
   ROOT API
===================================================== */

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Quba Istirahet Mekani API is running"
    });
});


/* =====================================================
   SERVER
===================================================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});