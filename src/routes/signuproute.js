const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/', (req,res) => {

    res.render('signup',{});
    
})

signupRouter.get("/adduser", (req,res) => {
    
    var newuser = {
        "uid":req.query.uid,
        "pwd":req.query.pwd
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;