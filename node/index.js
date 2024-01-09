
const express =require("express");

const port =5000;

const app =express();

const dotenv =require("dotenv").config();

const ports =process.env.port || 5000;

app.get("/api/home",(req,res)=>{
    res.send("weclome API ")
});
app.get("/api/",(req,res)=>{
    res.send("weclome API about")
});