//bycript libreary practiuce 
//this lets me hash the password in a way that nowbady can predict or can acces or steal it from my database 

const express = require('express')
const{ UserModel , TodoModel }= require("./db")//wew inmpertr 
const { JsonWebTokenError } = require('jsonwebtoken')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const JWT_SECRET= "yourjwtsecret"
const mongoose = require('mongoose')
mongoose.connect("yourdatabaseURl")

//how mongoose work:-  use mongoose connection string and also specify the databse location then give a model  like (schema)  
const app = express()
app.use(express.json())

app.post('/signup',async function(req,res){
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  let errorthorow = false;
  try{
  const hashpassword = await bcrypt.hash(password,5)//this 5 tell us how much you want to hash the password means how many times here is 5 
  await UserModel.create({ // we need to await this  for sucess or failure  we doesnt use await then  it doesn't wait for connection database it just fire 
    //re.json and letting user tht you are sucesufill login 
    email: email,//we need to await it to let know its sucess or failure 
    password: hashpassword,
    name:name
  })
}catch(e){
  res.json({
    message:"user is already exist  "
    
  })
  errorthorow= true;
}
if(!errorthorow){
  res.json({
    message:"you are sucesfully signuppp"
  })
}
//   res.json({//cannot send another message after the catch message
//     message: "you are loggend in"
//   })
 })


app.post("/signin", async function(req,res){
  const email = req.body.email;
  const password =  req.body.password;
  const user = await UserModel.findOne({///findone return promise if
    email: email,
  })
  if(!user){
    res.status(403).json({
      message:"user not found in database"
    })
    return
  }
  console.log(user)
  const matchpassword= await bcrypt.compare(password, user.password)
  if(matchpassword){
    console.log(user._id)
    const token= jwt.sign({//here we are encripted token
     id: user._id.toString()//changing from object class to string
    },JWT_SECRET);
    res.json({
      token: token
    })
  }else{
    res.status(403).json({
      message:"invilad userinput"
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