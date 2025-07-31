import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js';

connectDB(); // Connect to MongoDB
const app = express();
app.use(cors());  // Enable CORS for all routes

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(clerkMiddleware())

app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
    return res.send("Welcome to the server!");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;