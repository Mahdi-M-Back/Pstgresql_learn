const express = require('express');
const dotenv = require('dotenv')
const app = require('./../index')

dotenv.config({path:'./../.env'})



const Port = 3000 || process.env.PORT
app.listen(Port , ()=>{
  console.log(`Sever running on port : ${Port} ...🚀`)
})