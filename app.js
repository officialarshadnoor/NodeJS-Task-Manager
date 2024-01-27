const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const cors = require('cors');
require('dotenv').config();

// Middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());

// Routes

app.use('/api/v1/tasks', tasks);

// Environment Variable for Port
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.error(error);
    }
};

start();