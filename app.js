const express=require("express");
const app= new express();
const mongoose=require("mongoose");
const morgan =require("morgan");
const cors=require("cors");
const jwt=require("jsonwebtoken");
const path=require("path");
app.use(express.static(path.join(__dirname,'/build')));

require("dotenv").config();
app.use(morgan("dev"));
app.use(cors());

const task=require("./routes/task");
app.use("/api",task);
app.get('/*', function (req,res) {
    res.sendFile(path.join(__dirname,'/build/index.html'));
});


const PORT=process.env.PORT;
const url=process.env.URL;

const dbconnection=require("./dbconnection/db");

app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING IN THE PORT "+PORT);
})