//http server
//  -> htttp server is the way to communicate throung the backend , like if we go on any website we send an http request 
//and server send me back with some html css of interface this is way of comm between a client or server.

// domain name 
// domain name is the name on top ofd the ip adress we can reach our server easily through domin names domain name is just a pointer of an specific ip adress

//ips 
//ip adress is AN LOGICAL ADRESS BY WHICH WWE CAN POCESS OUR WEBPAGE LIKE EVERY WEBSITE HAS AN IP ADRESS WHERE THE SERVER IS RUNNING ON LIKE 
// FACEBOOK HAS AN IP ADRESS AND GOOGLE SO WHEN EVER WE VISIT ON THT IP ADRESS IT REFLECT US THERE FRONTEND MODEL 
//LOCALHOST => LOCAL HOST HAS AN OWN IP ADRESS OF THAT PERSON LOCAL MACHINE 

//PORT
//PORRTS ARE AN LOGICAL ADRESSES BY WHICH A REQUEST DEFINES THE BIHEAVER OF REQUEST OPN SME PORT WE CAN HAVE MULTIPLE PROCESS

//METHODS 
//METHODS ARE GOOD WAY TO STRUCTURE THE HTTP SERVER HTTP METHODS ARE USED TO SPECIFIED THE TYPE OF ACTION THT CLIENT WANTS TO PERFORM ON A RESOURCEW ON SERVER
//METHODS LIKE PUIT, POST, GET, DELETE, UPDATE 

//RESPONSE
// RESPONSE MEANS WHAT KINDS OF DATA SERVER DELEVERING WHETHE IT IS JSON DATA HTML, 

//STATUS CODE WHO EVER THE CALLING THEY LOOK FOR STATUS CODE BEFORE LOOKING ON DATA 
// 200 STATUS CODE -> 200 STATUS CODE MEANS EVERYTHING IS OJKE THE REQUEST IS REQUEST IS DONE AND SERVER SENDED SOME DATA 
//204 -> EVERYTHING IS OKE BUT NO CONTENT TO SEND
//300 REDIRECTING IT DEFINE IF YOU ARE REDIRECTING THE PAGE FROM ONE WEBPAGE TP ONETHER PAGE 
//400=> IT DEFINE BAD REQUEST SEEVER UNDABLE TO UNDERSTAND THE REQUEST 
//4002=> UNAUTHORIZE 
//403=> UNDERSTOOD BUT REFUSE TO AUTHORIZE
//404=> RESOURCES COUNDNT BE FOUND IN SERVER 
//500 SERVER ERROR

//ROUTES 
// IT TELLS WHAT YOU WAN TO DO ON THE WEBPAGE ROUTES ARE PATH OR ENDPOINTS THT DEFINE HOPW INCOMING REQUEST HANDLE IT SPECIFY THEE EVENT OF OCCURENCE OF ACTION  PAGE  

//creating our fresh express app
// const app= express();
//handler
// app.get('/',function(req,res){
//   res.send({
//     name:"ankit",
//     coure:"compiiuter science"
//   })
// });
// app.listen(3000)


// const express = require('express')

// const app = express()

// app.get('/home',function(req,res){
//   res.send({
//     name: "ankit",
//     age:"19",
//     collage: "gi=ururnanak insd=stitute of techniology",

//   })
// })
// app.listen(3000,function(){
//   console.log("servewr is running on the port 3000")
// })

//TASK OF THE DAY 
// assinment is about creating todo deleting todo updating todo 
//******************CODE FOR POSTING THE DATA FROM THE SERVER TO CLIENT ***************************************** */
const express = require('express')
const app = express();

app.use(express.json());
let total=[]
app.post('/post',function(req,res){//HANDLER ONE
 const title=req.body.total
 const newTodo = { title };

  total.push(newTodo);

  res.status(201).send(newTodo);
})
app.listen(3000)
//***************************************************************************************************************************/
