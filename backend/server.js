const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const reservationRoutes = require("./routes/reservationRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/reservations", reservationRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Quba Istirahet Mekani API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});