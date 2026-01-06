require('dotenv').config(); // MUST BE LINE 1
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// --- Middleware ---
app.use(cors()); // Allows frontend to talk to backend
app.use(express.json()); // Allows backend to read JSON data

// --- Database Connection ---
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error("❌ ERROR: MONGO_URI is not defined in your .env file!");
    process.exit(1);
}

mongoose.connect(mongoURI)
    .then(() => console.log(" MongoDB Connected Successfully!"))
    .catch(err => {
        console.error("❌ MongoDB Connection Failed:");
        console.error(err);
    });

// --- Simple Model (For testing later) ---
const BoxingSchema = new mongoose.Schema({
    title: String,
    description: String
});
const BoxItem = mongoose.model('BoxItem', BoxingSchema);

// --- Routes ---

// 1. Home Route (To check if server is alive)
app.get('/', (req, res) => {
    res.send("Boxing App Backend is Running!");
});

// 2. Data Route (This is what your React frontend will call)
app.get('/api/hero', async (req, res) => {
    try {
        // For now, we send back static data. 
        // Later you can fetch this from the database using BoxItem.find()
        res.json({
            title: "SHADOW BOXING",
            subtitle: "Master the art of movement"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(` Server is flying on port ${PORT}`);
    console.log(` Test it here: http://localhost:${PORT}`);
});