var express = require('express');
var router = express.Router();
var Product = require("../../model/Product")
var check = require("../../mideelware/check")
router.post("/",  async (req, res) => {
    let product=new Product();
    product.name=req.body.name
    product.description=req.body.description
await product.save()
    return res.send(product)
});


 router.put("/:id",  async (req, res) => {
    let product =await Product.findById(req.params.id);
    product.name=req.body.name
    product.description=req.body.description
await product.save()
    return res.send(product)
    })
    router.get("/", async function (req, res, next) {
        let products = await Product.find();
      
        return res.send(products);
      });
     

module.exports = router;