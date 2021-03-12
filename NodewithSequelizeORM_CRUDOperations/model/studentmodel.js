const Sequelize=require('sequelize');
const sequaliz=require('./dbconfig');

    const Student = sequaliz.define("students", {
        name: { 
    type: Sequelize.STRING
    },
    
    email: {
    type: Sequelize.STRING
    },
    phone:{
        type:Sequelize.STRING
    }
},
    {
        timestamps:false
    });

Student.sync({force:true});
module.exports=Student;