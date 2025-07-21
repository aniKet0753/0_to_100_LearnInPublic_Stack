const express = require('express')
const jwt = require('jsonwebtoken')

JWT_SECRET="ihatemyself"

const app = express()
//signup

app.use(express.json())

let users=[];

function logger(req,res,next){
  console.log(req.method)
  const date = new Date().toLocaleString();
  console.log(`POST Request received at ${date}`);
  next();
}

app.post('/signup',logger,function(req,res){
  const username =  req.body.username
  const password = req.body.password

  users.push({
    username,
    password
  })
  res.send({
    message:"you are succesfully signup."
  })
})

//signup

app.post('/signin',logger,function(req,res){
  const username = req.body.username
  const password = req.body.password
  let founduser=null;
  for(let i=0;i<users.length;i++){
    if(users[i].username == username && users[i].password == password){
      founduser=users[i];
   }else{
        res.status(401).send({
             message:"user not found in database please signup"
                 })
          }
  }
  if(founduser){
  const token = jwt.sign({
    username:username
  },JWT_SECRET  // Recommended to set expiration
  )
      res.json({
      token:token
      })
}
})

//my deshboard page

app.get('/me',function(req,res){
  const token = req.headers.token;
  const decreption = jwt.verify(token,JWT_SECRET)
  console.log(decreption)//consoling
  const username = decreption.username;
  let foundusers= null
  for(let i=0; i<users.length;i++){
    if(users[i].username==decreption.username){
      foundusers= users[i]
    }
    if(foundusers){
      res.send({
        username:foundusers.username,
        password:foundusers.password
      })
    }
  }
})



//connectiong backend with frointebd 
app.get('/',function(req,res){
  res.sendFile(__dirname +"/index.html")
})

const port =3000;
app.listen(3000,function(){
  console.log(`app is listening on server  ${port}`)
})