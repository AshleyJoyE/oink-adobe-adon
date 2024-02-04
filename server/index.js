const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.listen(3011, () => {
    console.log(`Server Started at ${3011}`)
})
require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const routes = require('./routes/routes');

app.use('/api', routes)
