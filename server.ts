import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importing routes
import userRoute from './routes/user';

dotenv.config()

const app = express(); 
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoute);

app.listen('3000', () => {
    console.log("Server is up and running!")
})
