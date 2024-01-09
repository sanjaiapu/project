
const express =require("express");

const port =5000;

const app =express();

const dotenv =require("dotenv").config();

const port =process.env.port || 5000;
app.listen(port,()=>{
    console.log("welcome");
}