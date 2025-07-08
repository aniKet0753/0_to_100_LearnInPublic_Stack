
// async function getfatchiung(){
// const responds= await fetch("https://jsonplaceholder.typicode.com/todos/1")
// const data = await responds.text()
// console.log(data)
// console.log("after fatch")
// }
// getfatchiung()

//  exprees = require('express');//require express from dependcy
//   app= exprees()//created a fresh app for nect uses


//  app.get('/miltiply',function(req,res){//created a route for handleing multiplaction roter
//   const a = parseInt(req.query.a);//created a input field of a in query
//   const b = parseInt(req.query.b);//created a input field of b in query
//   const result = a * b;//put  tht inside result
//   res.send(`Result: ${result}`)//sended a result on web page or server
//  })

//   app.get('/add',function(req,res){
//     const a= parseInt(req.query.a)
//     const b = parseInt(req.query.b)
//     const addintion = a+b;
//     res.send(`the aDDITION OS THGE NUMBER IS  ${addintion}` )
//   })
//   app.get('/divide',function(req,res){
//    const a= parseInt(req.query.a)
//    const b =  parseInt(req.query.b)
//   const divide = a/b;
//   res.send(divide) 
//  })

//   app.get('/subtract',function(req,res){
//   const a= parseFloat(req.query.a)
//   const b = parseFloat(req.query.b)
//   const subtract = a-b;
//   res.send(subtract)
//  })



//  let port=3000//listner on port
//  app.listen(port, function(){
//   console.log("server is on port 300 running ")
//  })
const axios = require('axios')

// async function response(){
//   let data = await axios("https://jsonplaceholder.typicode.com/todos/1")
//   const responme = await data.data
//   console.log(responme)
// }
// response()

function fatchingdata(){
  let data = axios.get("https://jsonplaceholder.typicode.com/todos/1")
  console.log(data)
}
fatchingdata()
//promise is a class which is used asynckranous aperation 
//axios is a external librarery whicb also use promise 