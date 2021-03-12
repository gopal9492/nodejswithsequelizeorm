const Student = require('./student');
const Course = require('./course');

Course.hasMany(Student,{
    foreignKey: 'courseid'
  });
Student.belongsTo(Course,{
    foreignKey: 'courseid'
});