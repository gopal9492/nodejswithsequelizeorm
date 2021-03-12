const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Course = require('../models/course');

router.get('/', (req, res) => {
    Student.findAll({
        include: {
            model: Course,
            attributes: ['name','batch']
        },
        attributes: ['name', 'address']
    }).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    })
});
router.get('/:id',(req,res)=>{
    Course.findAll({
        where: {
           'id': req.params.id
        },
        include: [
            {model: Student,  attributes: ['name', 'address'] }
        ]
    }).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    })
})

module.exports = router;