const mongoose=require('mongoose');

const productSchema=new mongoose.Schema(         //Schema is a class so we use new to create new object
    {
       name: String,
       price: String,
       description:String,
       ratings:String,
       images:[
        {
           image:String
        }
       ],
       category:String,
       seller:String,
       stock:String,
       numOfReviews:String,
       created:Date
    }
)  

const productModel=mongoose.model('Product',productSchema);

module.exports=productModel;