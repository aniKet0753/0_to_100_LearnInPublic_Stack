class reactangle{//creating a class 
  constructor(weadth,height,colour){
  this.weadth=weadth;
  this.colour=colour;
  this.height=height;
}

area(){
  const area= (this.weadth*this.height)
  return area
}
paint(){
  console.log(`the colour of rectanghle is ${this.colour}`)
}
}
const rent= new reactangle(1,2,"red")//creating an object of class and object of a class
const areas = rent.area();//calling area 
const printer = rent.paint()
console.log(printer);
console.log(areas);

// const raw= new Date()
// console.log(raw);
// const row = getMonth()
// const orwe = getDay()
// console.log(row,orwe)

// map function 
// const map = new Map();
// map.set('name','ankit')
// map.set('age',10);
// console.log(map.get('age'))

//setTimeout(200,callback())this is callback approach

// function callback(){
//   console.log("this is call back function");
// }
//setTimeoutPromisified(1000).then(callback);//promisified with .then approach that let me call the function after 1sec with .then and it is reaterning a promise object

//creating own proomise
function calling(resolve){//defining a function with resolve nperimiter as an wrapper
  setTimeout(resolve,3000)// calling it after 300 sec .. 
}

function main(){// main function that will go inside it resolve 
  console.log("thisa is calllback")
}
calling(main)//calling function with main as an perimiter with resolve pointing on it

//promise look like

function callback(resolve){// in this function we r excuting the resolve emedetly && createda promise
  setTimeout(resolve,9000)
}
let p= new Promise(callback)// define a promise 

// Define what to do when the promise resolves
function main(){
  console.log("ankit is gooodd boy")
}
//using the romise
const call= p.then(main)
console.log("Waiting for the promise to resolve...");
