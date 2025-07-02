//creating a function that take sum of n number as an input and returning the added result like 5->1+2+3+4+5=15
function add(add){
  let store=0//creating a empty store contaner so that at every itreaction value get dumped here
  for(i=1;i<=add;i++){//loop for add
        store = store+i;//adding ittraction value + stored value
    }
    console.log(store)
  }
add(3)// calling function with arrgument
const { isUtf8 } = require("buffer");
//input/output operation 
//reading a external fie
const fs =require("fs")//fs liberary by which we perform i/o operation
const content = fs.readFileSync("a.txt","utf-8")//readfle sync and path and encoding
const secound=fs.readFileSync("b.txt","utf-8");
console.log(content)//log
console.log(secound)

//asynchronous 
print=function(err,data){
  console.log(data)//the third arrgument ehich taken this function and function contains a data and a error
}
fs.readFile("a.txt","utf-8",print)//asynchronous process is happning means runnung process in parallel 
fs.readFile("b.txt","utf-8",print)//who wver excute first it will get printend

console.log("done")

timeout=function(){
  console.log("this is after timeout")//settimeout function
}
console.log("hey there ");
setTimeout(timeout,1500);//async process is happinnig here
console.log("lower one")
//cpu intensiv task settimeout
console.log("hi here i am head");

timeup=function(){//set timeout function
  console.log("set time out functiuon cxall print");
}
setTimeout(timeup,1900);//puttinmg timmer
let count=0
for(i;i<7;i++){//cpu intensiv task that cpu first excute
  count=count+1;
console.log("for loop cpu intensiv task")
}
console.log("this is footeer")