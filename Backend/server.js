const express = require("express");
const cors = require("cors");
require("dotenv").config();
const studentRoutes = require("./routes/studentRoutes");

// Database
require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Base Route
app.get("/", (req, res) => {
    res.send("LMS Backend Running Successfully");
});

// Authentication Routes
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});