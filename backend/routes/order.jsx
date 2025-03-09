const express=require('express');
const { createOrder } = require('../controllers/orderController.jsx');
const router=express.Router();
router.route('/order').post(createOrder);//create a product

module.exports=router;