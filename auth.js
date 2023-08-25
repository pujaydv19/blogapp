const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");


router.get('/',(req,res)=>{
    res.send("hello")
})

router.post("/signup",(req,res) => {
  const {name,userName, email, password}= req.body;

const user = new USER(({
    name,
    email,
    userName,
    password
}))

user.save()
.then(user => {res.json({message: "saved successfully"})})
.catch(err => {console.log(err)})  

})


module.exports = router;