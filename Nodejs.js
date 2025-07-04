// assinment
//split let me split the data inside  a array in seprated form
//sort sort the given array

const { count } = require("console");

//join is jopin the sorted array back to string
function sorted(string){
  let short= string.split("").sort().join("");
  console.log(short);
}
sorted("ankit")

// greter number inside in given array
let array =[1,3,5,7,10]

function largest(element){
  let largest =element[0]
  for(let i=0; i<element.length;i++){
    if(element[i]> largest){
      largest = element[i]
    }
  }
  return largest
}
console.log(largest(array)); 

//creating stop watch
// count=0
// function timer(){
//   console.clear()
//   console.log(count)
//   count++;
// }
// setInterval(timer,3000)
//by creating our on set timne out as set interval
let ctr=1;
function time(){
console.clear()
  
  console.log(ctr)//1
  ctr++;//2
  setTimeout(time,2000)
}
setTimeout(time,2000)
//node js is an open source js runtime that allow to excite javascript on server side , its built on crome v8 engine 
//node js come in picutre cus it will be very nice if we hahve javascript to runninng both frontend and backend
//we have some internal and exterrnal packages internal like fs , 
