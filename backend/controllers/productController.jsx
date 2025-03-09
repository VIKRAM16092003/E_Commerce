
const ProductModel=require('../models/productModel.jsx');
exports.getProducts=async (req,res,next)=>
{
    const query=req.query.keyword?{
        name:{
            $regex:req.query.keyword,
            $options:'i'
        }
    }:{}
   const products=await ProductModel.find(query);   // we use await because find is async //ProductModel.find({}) to get the all data //ProductModel.find()(name="victor") to get particular value in the database
   res.json(
    {
        success:true,
        message:'get product!!!',
        products
    }
   )
}

exports.getsingleProduct=async (req,res,next)=>
    {
        try{
       const product= await ProductModel.findById(req.params.id)   // we use await because find is async//findbyid get the particular data by using id
       res.json(
        {
            success:true,
            message:'get single product!!!',
            product

        }
       )
    }
    catch(error)
    {
        console.log(error);
        res.status(404).json({
            success:false,
            message:'server error data not found'
        });    
    }
    }