const express=require('express');
const router=express.Router();
const author=require('../models/author');
const books=require('../models/book');
const booksauthor=require('../models/association')
router.get('/',(req,res)=>{
    books.findAll({ include: author })
        .then((tags) => {
          res.send(tags);
        })
        .catch((err) => {
          console.log(">> Error while retrieving Tags: ", err);
        });
})
router.get('/:name',(req,res)=>{
    books.findOne({where:{'name':req.params.name},include: [
        {model: author,  attributes: ['name'] }
    ]
}).then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(">> Error while retrieving data: ", err);
  });
})
module.exports=router