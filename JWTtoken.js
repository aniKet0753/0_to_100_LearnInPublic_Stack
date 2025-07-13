//json web Token
//why we are using token ?
// inn token wer are using it inj ourr veriable ... but in real world  we have to store it inside a database 
//on every request we are talking with database to verify the token it is statefull
// here the problem is we have to hit the database on every request that is comeing from authentaction endpoint
//jwt
//stateless
const express = require('express')
const jwt = require('jsonwebtoken')
const  JWT_SECRET ="randomihatemyself"//jwt secret is a kind of signature on a token that bckend verifyes
const app = express()

app.use(express.json())

const users=[];

app.post('/signup',function(req,res){
  const username = req.body.username;
  const password = req.body.password;


  users.push({
     username: username,
     password: password,
  })
  res.send("SUCESSFULLY NOW PLEASE SIGNUP")
  console.log(users)
})
//we are dedicating token here  because this is signin
let foundUser=null;
app.post('/signin',function(req,res){
  const username = req.body.username
  const password = req.body.password
  for(let i=0;i<users.length;i++){//loopuing 
    
    if(users[i].username==username && users[i].password==password){// checking the username and password if exixt or not 
      foundUser= users[i]
    }
  }
  if(foundUser){
    const  token = jwt.sign({//creating a token
      username:username//taking two arggument , first is what you want to encrept and secound whaty is your secreate
    },JWT_SECRET)
    res.send({
      token:token
      })
      console.log(users)
    }else{
      res.status(400).send({
        message:"invalid username and password plewase first singup"
      })
    }
})

app.get('/me',function(req,res){
  const token = req.headers.token;
  const jwtinformationverify= jwt.verify(token,JWT_SECRET)//verifing the token that provided in signin page//and deode
  const usernam= jwtinformationverify.username//assigine it to usernam of decoded username for further comaparesation
  let founduser= null;
  for(i=0;i<users.length;i++){
    if(users[i].usernam== usernam){
      founduser=users[i]
    }
  }
  if(founduser){
    res.json({
      username:founduser.username,
      password:founduser.password
    })
  }else{
    res.json({
      message:"sorry inveland page"
    })
  }
  
})

const port= 3000;

app.listen(port, function(){
  console.log(`server is running on port${port}`)
})