const express=require('express');
const router=express.Router();
const books=require('../models/book');

router.post('/',(req,res)=>{
    books.bulkCreate(req.body) .then(data => {
        res.send("successfully data added");
      })
      .catch(err => {
        res.send("data is not added");
      });
})
router.get('/',(req,res)=>{
    books.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
})

module.exports=router