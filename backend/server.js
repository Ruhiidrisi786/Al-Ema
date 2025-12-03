const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./models/Contact');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST"]
}));
app.use(express.json());

// MongoDB connect
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected Successfully"))
    .catch((err) => console.log(err));

//API
app.post('/send-message', async (req, res) => {
    try {
        await Contact.create(req.body);
        return res.json({
            success: true,
            message: "Message sent successfully"
        });
    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));