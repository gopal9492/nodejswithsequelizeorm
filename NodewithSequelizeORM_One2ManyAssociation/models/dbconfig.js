
const Sequalize=require('sequelize');

const sequelize=new Sequalize('gopal','root','root',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
sequelize.authenticate()
.then(function () {
    console.log("CONNECTED! ");
})
.catch(function (err) {
    console.log("SOMETHING DONE GOOFED");
})

module.exports=sequelize;
