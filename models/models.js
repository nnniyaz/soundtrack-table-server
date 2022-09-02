const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Track = sequelize.define('track', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    author: { type: DataTypes.STRING },
    music: { type: DataTypes.STRING },
    genre: { type: DataTypes.STRING },
    year: { type: DataTypes.INTEGER }
});

module.exports = {
    Track
}