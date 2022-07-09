var express = require('express');
var router = express.Router();
var Product = require("../model/Product")
var check = require("../mideelware/check")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/home",check, async function (req, res, next) {
  let recipes = await Product.find();
  return res.render("site/home", { recipes}); // rendering menu and passing all the recipes
});





module.exports = router;
