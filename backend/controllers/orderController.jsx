const orderModel=require('../models/orderModel.jsx');
//create an order
exports.createOrder=async (req,res,next)=>
{   console.log(req.body);
    const cartItems=req.body;


    //total amount
    const amount=Number(cartItems.reduce((accum,item)=>(accum+item.product.price*item.qty),0).toFixed(0));//important
    console.log(amount,"total amount");
    

    //status
    const status="pending";
    const order=await orderModel.create({cartItems,amount,status}) //used to create data in the database...

    res.json({
        success:true,
        message:"order created!!!",
        order,
    })
}