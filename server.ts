import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Importing routes
import userRoute from './routes/user';
import { mongo } from 'mongoose';

dotenv.config()

const app = express(); 
app.use(cors());
app.use(express.json());

// Connect to the database
mongoose.connect(
    process.env.MONGO_URL!, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log("Connected to the DB!") }
)

// Routes
app.use('/api/user', userRoute);

app.listen('3000', () => {
    console.log("Server is up and running!")
})
