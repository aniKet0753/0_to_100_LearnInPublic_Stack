//reading the file data should be promisified
//triming the starting space and back space should be prosimified 
//write it back to the file promisified


 const { error } = require('console')
const fs =require('fs')

// function callback(err,data){
//   console.log(data)
// }

//   fs.readFile("","utf-8", callback)

//creating promise and performing reading writing operation on it 
function calling (resolve){//creayed r own promise
  const readdata=fs.readFile("a.txt","utf-8",main)
  console.log("the readed data is"+ readdata)
}
  let promise= new Promise(calling)//defineing promise

function main(error,data){
  console.log(data)
  let wri=fs.writeFile("b.txt",data,"utf-8", (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});
}
 promise.then(main)

//async and await

function setTimeoutPromisofed(duration){//under the hood it specify the promise 
  return new Promise(function(resolve){
    setTimeout(resolve,duration)
  })
}

async function solve(){//we use async await function just to demonstrate the funciton look more readiable or meaning 
  await setTimeoutPromisofed(1000);//user the hud it doing promises
  console.log("first")
  await setTimeoutPromisofed(3000);
  console.log("secound")
  await setTimeoutPromisofed(5000);
  console.log("third")
}
solve()
console.log("last line")//return first