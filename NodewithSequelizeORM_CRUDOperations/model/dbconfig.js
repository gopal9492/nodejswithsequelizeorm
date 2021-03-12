
const sequalize=require('sequelize');

const sequali=new sequalize('gopal','root','root',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
sequali.authenticate()
.then(function () {
    console.log("CONNECTED! ");
})
.catch(function (err) {
    console.log("SOMETHING DONE GOOFED");
})

module.exports=sequali;
