const { Model, DataTypes } = require('sequelize');
const sequelize = require('./dbconfig');

class Books extends Model {}
Books.init({
    name: DataTypes.STRING,
    publishyear:DataTypes.INTEGER,
}, {
    sequelize,
    modelName: "books",
    timestamps: false
});

module.exports = Books;