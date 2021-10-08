const { response } = require("express");
const express = require ("express");
const { request } = require("http");
const time = require("./views/middlewere/time");

const app= express();
//api

//app.get("/",(req,res)=>{
  //  res.sendFile(__dirname + "/views/index.html");
//});
//app.get("/about", (req,res)=>{
  //  res.sendFile(__dirname + "/views/about.html");
//});
//app.get("/style.css", (req,res)=>{
  //  res.sendFile(__dirname + "/views/style.css");
//});

app.use(time);

app.use(express.static("views"));




const PORT=7000;

app.listen(PORT,(err)=> err?console.log(err):console.log("server is running"));