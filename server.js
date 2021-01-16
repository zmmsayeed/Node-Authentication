const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log("Connected to DB!") }
);

const app = express();
app.use(cors());

// Middlewares
app.use(express.json());

// Route Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(4000, () => console.log("Server is up and running"))
