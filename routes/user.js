var express = require('express');
var router = express.Router();
var User = require("../model/user")


 
router.post("/login",  async (req, res) => {
    let user=await User.findOne({email:req.body.email,password:req.body.password})
  
    return res.redirect("/home")
   
});
router.post("/reg",  async (req, res) => {
  
  let user=new User();

  user.name=req.body.name
  user.email=req.body.email
  user.password=req.body.password
  console.log(req.body.name)
await user.save()
  return res.redirect("/login")
 
});
router.get('/signup', function(req, res, ) {
    res.render("site/signup")
  });
  router.get('/login', function(req, res, ) {
    res.render("site/login")
  });
 

module.exports = router;