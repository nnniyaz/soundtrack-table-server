require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const router = require('./router/router');
const models = require('./models/models');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    }
))
app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT} PORT.`));
    } catch (error) {
        console.log(error)
    }
}

start()