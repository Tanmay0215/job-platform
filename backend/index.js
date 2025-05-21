import dotenv from 'dotenv';
import connectDB from './db/index.db.js';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import internRoutes from "./routes/intern.routes.js";
import hackathonRoutes from "./routes/hackathon.routes.js";
import jobRoutes from "./routes/job.routes.js";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

connectDB()

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/interns', internRoutes);
app.use('/api/hackathons', hackathonRoutes);
app.use('/api/jobs', jobRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
