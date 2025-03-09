const express =require('express');  //import express js
const dotenv=require('dotenv');   //import config.env file
const path=require('path'); //import path working with file and directory path 

const cors=require('cors');//import cors

const connectDatabase=require('./config/connectDatabase.jsx'); //import db


const app=express();   //used for routes and middleware
dotenv.config({path: path.join(__dirname,"config","config.env")}); //connecting the config.env file with app.jsx


connectDatabase();

//middleware
app.use(express.json()); // for post method sending request data will be converted to json 
app.use(cors());

//import the routes
const products=require('./routes/product.jsx');
const orders=require('./routes/order.jsx');

//this used for starts routes
app.use('/api/v1/',products);
app.use('/api/v1/',orders);




//conecting the server
app.listen(process.env.PORT,()=>
{
    console.log(`server running ${process.env.PORT} in ${process.env.NODE_ENV}`);
});

