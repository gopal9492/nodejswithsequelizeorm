const Sequelize=require('sequelize');
const sequaliz=require('./dbconfig');

    const Student = sequaliz.define("students", {
       
        name: { 
    type: Sequelize.STRING
    },
    
    address: {
    type: Sequelize.STRING
    },
    courseid: {
        type: Sequelize.INTEGER
        },
},
    {
        timestamps:false
    });

Student.sync({force:false});
module.exports=Student;