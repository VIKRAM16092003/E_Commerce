const express=require('express');
const { getProducts, getsingleProduct } = require('../controllers/productController.jsx');
const router=express.Router();
router.route('/products').get(getProducts);//by using this get method three parameters are passed request ,response,next
router.route('/product/:id').get(getsingleProduct);//get the single product

module.exports=router;