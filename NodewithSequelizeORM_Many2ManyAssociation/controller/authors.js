const express=require('express');
const router=express.Router();
const author=require('../models/author');

router.post('/',(req,res)=>{
    author.bulkCreate(req.body) .then(data => {
        res.send("successfully data added");
      })
      .catch(err => {
        res.send("data is not added");
      });
})
router.get('/',(req,res)=>{
    author.findAll()
    .then(authors => {
        res.send(authors);
    })
    .catch(err => {
      console.log(err);
    });
})

module.exports=router;