
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./dbconfig');
const Authors=require('./author');
const Books=require('./book');

const BooksAuthors = sequelize.define('booksauthors', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  },{
    timestamps:false
});

Authors.belongsToMany(Books,{through: BooksAuthors});
Books.belongsToMany(Authors,{through: BooksAuthors});
BooksAuthors.belongsTo(Books);
BooksAuthors.belongsTo(Authors);
Books.hasMany(BooksAuthors);
Authors.hasMany(BooksAuthors);

module.exports=BooksAuthors;
