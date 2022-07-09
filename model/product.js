var mongoose =require("mongoose")

var productSchema= mongoose.Schema({


    name:String,
    description:String,
     
},
{ timestamps: true }
)

var Product = mongoose.model("product",productSchema)

module.exports = Product; 