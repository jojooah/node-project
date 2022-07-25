"use strict";

const express=require("express");
const router=express.Router();

app.get("/",(req,res)=>{
    res.render("home/index");
});


app.get("/login",(req,res)=>{
    res.render("home/login");
})

module.exports=router;