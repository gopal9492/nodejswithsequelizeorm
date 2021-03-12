const express = require('express');
const app= express();
const parser= require('body-parser');

require('./models/association');
const sequelize=require('./models/dbconfig');


app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

app.use('/api/books', require('./controller/books'));
app.use('/api/authors', require('./controller/authors'));
app.use('/api/bookswithauthor', require('./controller/booksauthors'));


const port=3007;
app.listen(port,()=>console.log(`app running localhost:${port}`));
sequelize.sync({ force: false }).then(() => {
    console.log("We have connected to the database");
}).catch(error => {
    console.log('An error has occurred', error);
})