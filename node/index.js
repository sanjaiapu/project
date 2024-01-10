
const express =require("express");

const port =5000;

const app =express();
add=.env file
PORTS=5000
const dotenv =require("dotenv").config();
const PORTS =5000

const PORTS =process.env.port || 5000;

app.get("/api/home",(req,res)=>{
    res.send("weclome API ")
});
