const express = require('express');
const app= express();
const parser= require('body-parser');
const router=require('./controller/sturoute');
require('./models/association')
const sequelize=require('./models/dbconfig');
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use("/",router);


const port=3007;
app.listen(port,()=>console.log(`app running localhost:${port}`));
sequelize.sync({ force: false }).then(() => {
    console.log("We have connected to the database");
}).catch(error => {
    console.log('An error has occurred', error);
})