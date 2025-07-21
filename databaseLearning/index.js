const express = require('express')
const{ UserModel , TodoModel }= require("./db")//wew inmpertr 
const { JsonWebTokenError } = require('jsonwebtoken')
const jwt = require('jsonwebtoken')
const JWT_SECRET= "your jwtsecret"
const mongoose = require('mongoose')
mongoose.connect("your monodb database url")

//how mongoose work:-  use mongoose connection string and also specify the databse location then give a model  like (schema)  
const app = express()
app.use(express.json())

app.post('/signup',async function(req,res){
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({ // we need to await this  for sucess or failure  we doesnt use await then  it doesn't wait for connection database it just fire 
    //re.json and letting user tht you are sucesufill login 
    email: email,//we need to await it to let know its sucess or failure 
    password: password,
    name:name
  })

  res.json({
    message: "you are loggend in"
  })
})


app.post("/signin", async function(req,res){
  const email = req.body.email;
  const password =  req.body.password;
  const user = await UserModel.findOne({///findone return promise if
    email: email,
    password: password
  })
  console.log(user)
  if(user){
    console.log(user._id)
    const token= jwt.sign({//here we are encripted token
     id: user._id.toString()//changing from object class to string
    },JWT_SECRET);
    res.json({
      token: token
    })
  }
})


app.post('/todo',auth,function(req,res){
  const userId= req.userId;
  res.json({
    userId:userId
  })
})

app.get('/todos',auth, async function(req,res){
  const userId= req.userId;
  const todos = await TodoModel.find({
    userId:userId
  })
  res.json({
    todos
  })
})


function auth(req,res,next){
  const token=  req.headers.token
  const verifying = jwt.verify(token,JWT_SECRET)
  if(verifying){
    req.userId = verifying.id;
    next()
  }else{
    res.status(403).json({
      message:"inviled credincal"
    })
  }
}




app.listen(3000)