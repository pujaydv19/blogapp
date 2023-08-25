const express = require('express');
const app = express()
const port = 5000;
const mongoose = require("mongoose");
const  mongoUrl = require("./keys")

require('./models/model')
app.use(express.json())
app.use(require("./routes/auth"))
mongoose.connect(mongoUrl)

mongoose.connection.on("connected",()=>{
    console.log("successfully connected to Mongo")
})
mongoose.connection.on("error",()=>{
    console.log("not connected to mongoDb")
})

app.listen(port, ()=>{
    console.log("server is runnning on port" + " " +  port)
})