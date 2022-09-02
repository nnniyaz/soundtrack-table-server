const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.DB_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});