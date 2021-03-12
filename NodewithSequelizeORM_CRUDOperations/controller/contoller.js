const express = require('express');
const route= express.Router();
const studentmodel=require('../model/studentmodel');

route.get('/',(req,res)=>{
    res.render("home");
})
route.get('/home',(req,res)=>{
res.render("home");
})
route.get('/add',(req,res)=>{
    res.render("add-user");
})
route.post('/add',(req,res)=>{
    var data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    }
    studentmodel.create(data)
    .then(data => {
        res.render('print',{message:"successfully data added"});
      })
      .catch(err => {
        res.render('add-user',{message:"data is not added"});
      });
      
})
route.get('/display',(req,res)=>{
    studentmodel.findAll()
    .then(users => {
        res.render("display-users",{users:users});
    })
    .catch(err => {
      console.log(err);
    });
})
route.get('/show/:id',(req,res)=>{
    studentmodel.findByPk(req.params.id).then(users=>{
        res.render("show-user",{users:users});
      }).catch(err =>{
        res.send(err);
      })
    })
route.get('/edit/:id',(req,res)=>{
    studentmodel.findOne({where:{id:req.params.id} }).then(users=>{
        res.render("edit-user",{users:users});
      }).catch(err =>{
        res.send(err);
      }) 
})
route.post('/edit/:id',(req,res)=>{
    studentmodel.update(req.body, {
        where: { id:req.params.id }
      })   .then(num => {
        if (num == 1) {
            res.render("print",{ message : "your data is updated."});
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.redirect('edit/'+req.params.id);
      });
})
route.get('/delete/:id',(req,res)=>{
    studentmodel.destroy({
        where: {
          id:req.params.id
        }
      }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
        if(rowDeleted === 1){
            res.render('print',{message:"successfully data is deleted the id no is: "+req.params.id});
         }
      }, function(err){
        res.redirect('print',{message:"data is not deleted"}) 
      });
})
module.exports=route;
