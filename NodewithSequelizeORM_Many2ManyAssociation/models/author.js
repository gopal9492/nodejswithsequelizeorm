const { Model, DataTypes } = require('sequelize');
const sequelize = require('./dbconfig');

class Authors extends Model {}
Authors.init({
    name: DataTypes.STRING,
    address:DataTypes.STRING,
}, {
    sequelize,
    modelName: "authors",
    timestamps: false
});

module.exports = Authors;