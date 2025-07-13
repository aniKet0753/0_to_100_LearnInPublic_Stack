const express = require('express')

const app = express()// we created an app instent by whic we can use it further

app.use(express.json())//helping me to parse post body with the request and we can acces it 

const users=[];//created an empty array for storing users 

function generateToken(){// this is random token for giving to the user
let option = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
               "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9"];
  let token=null;
  for(let i=0;i<60;i++){//looping to sll the array element
    token= token+ option[Math.floor(Math.random()*option.length)]//making the taken randomand unique
  }return token;
}
//in sungnup we are not dedication any token here

app.post('/signup',function(req,res){
  const username = req.body.username;//extrecting the username from body of request
  const password = req.body.password;//extrecting password from body

  //we can add checkponts overherre that user should not sighup again with the same email
  // if(users.find(u=> u.username==username)){
  //   res.json){
  //     res.send("user exixst")
  //  })
  // }
  users.push({//pussing the usernam and password into array
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
    const  token = generateToken()//returning token
    foundUser.token=token;
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
  let founduser= null;
  for(i=0;i<users.length;i++){
    if(users[i].token== token){
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