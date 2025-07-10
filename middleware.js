//middleware has a fucnction that
//middleware has a function has has a acces about req, res , next function, it act as a intermidiate 
//middle ware can send the request to the route and take the request
//perpose is to mzay maynot  modify the request or responnse object and ending the cycle like if someone want to go on a roiute tht has noe ecces for everyone 
//then there should be something in beteenn to block tht request 
//bigegst yuse case is for authacantation

//sopesope we have an enbdpoint 
// const express = require('express')
// const app= express()

// let count=0

// function midleware(req,res,next){//a kinde of middleware function 
//   count =count+1;
// console.log(`number of user hits on your page ${count}`)

// next()
// }

// function sum(req,res){
//     const a= parseFloat(req.query.a)
//     const b = parseFloat(req.query.b)
//       res.send({
//         ans: a+b
//       })
// }

// app.get('/home',midleware,sum)
//   // midleware()// we are countinbg the number of user when the visite oin our page 

// port=3000;
// app.listen(3000,function(){
//   console.log(`the server is running on ${port}`)
// }
// )

// const express = require('express')
// const app= express()

// let count=0

// function midleware(req,res,next){//a kinde of middleware function 
//   count =count+1;
// console.log(`number of user hits on your page ${count}`)

// next()
// }

// function sum(req,res){
//     const a= parseFloat(req.query.a)
//     const b = parseFloat(req.query.b)
//       res.send({
//         ans: a+b
//       })
// }


// app.use(midleware)//thisw is an another way of definening a middleware by usig a global moiddleeware , that means whatever that is comeing after this  thid going to attachhed
// //with the route as an middleware , above this the router is . endpoint is not going to attach this middleware
// app.get('/home',sum)
//   // midleware()// we are countinbg the number of user when the visite oin our page 

// port=3000;
// app.listen(3000,function(){
//   console.log(`the server is running on ${port}`)
// }
// )


const express = require('express')
const app= express()


// function midleware(req,res,next){//defineing our own middleware 
//   console.log("method is "+req.method)//consoling the mwthod of request ?5&5....
//   console.log("date is "+ new Date())//coling the date of the user hiting the server
//   next()//calling the next function as a middleware 

// }
// app.use(midleware)//putting this middleware inside every route

// function sum(req,res){
//     const a= parseFloat(req.query.a)
//     const b = parseFloat(req.query.b)
//       res.send({
//         ans: a+b
//       })
// }

// function divide(req,res){
//     const a= parseFloat(req.query.a)
//     const b = parseFloat(req.query.b)
//       res.send({
//         ans: a/b
//       })
// }
// app.get('/sum',sum)
// app.get('/divide',divide)

const cors = require('cors')
app.use(express.json());

app.use(cors())//sinmpleyu we are allowing the cors to partswhite liste evereything 
  // domain:["http://localhost:3000/sum"]//white listing a specific domain to put the data to fronntend


app.post('/sum',function(req,res){
  const a = parseInt(req.body.a)
  const b= parseInt(req.body.b)
  res.json({
    ans: a+b,
  });
});
port =3000;
app.listen(3000,function(){
  console.log("the srerver is running omn "+ port)
})

//there is another way wer acn connect frontend tpo the backend by jusat puttinfg ther path inside /sunm route