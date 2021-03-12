const Sequelize=require('sequelize');
const sequaliz=require('./dbconfig');

    const Course = sequaliz.define("course", {
        name: { 
    type: Sequelize.STRING
    },
    batch:{
        type:Sequelize.INTEGER
    }
},
    {
        timestamps:false
    });

Course.sync({force:false});
module.exports=Course;