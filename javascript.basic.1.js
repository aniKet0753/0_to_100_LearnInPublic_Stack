//jvascript properties
// javascript is a interpreted language which means it compile and run line by line. or
//javascript is dynamically tupe language which menas in js veriable it lets u convert onr data type to another data type 
var a=10
a="ankit";
a=14;
console.log(a);// this will retuen 14 
//javascript has garbage collector
//syntex  -- javascript has three variable decleration by which we can define a veriable\
var firstname="ankit";
firstname=10;
console.log(firstname)// heere the first name would be 10 value
firstname=true;
console.log(firstname)// this will print true as it compile line by line and firstname is last one which has that valirue
//assinment 
// function which can let u know that u can vote if ue >18
function voting (age){
  if(age>18){
    console.log("you are allowed to vote");
  }else{
    console.log("you are not allowed give votew cus yoiu are below 18")
  }
}
let isage=voting(17)
console.log(isage)

// for loop
let arr = ["ankit","kumar","array","nothing"]
//inititation and condition and increment section
for(i=0; i<arr.length;i++){
  console.log(arr[i])
}
//object
greeting={
  name:"aniket",
  age:21,
  gander:"male",
  collage:"gurrunanank",
}
function greet(user){
  console.log("hi " + greeting.name +" your age is "+greeting.age)// string string concatenation we are adding string to a input
  console.log(`hwllo welcome to our page ${user}`)
}
greet("ankit")
//array of object
let array=["ankit", 12, {names:"ankit",
  age:12
}]//we  can giiive objet inside in array
var value=array[1]
console.log(value)
// assiment to create a array object and pass it into a function and print only those object which has male gander and age <18

function fun (arr){//putting array inside function 
  for(i=0;i<arr.length;i++){//looopingh
    const user = arr[i];//puting all that itrated object inside a veriable
    if(user.gander=="male" && user.age>18){//comapring
      console.log(user)
    }
    else{
      console.log("not applicable user")
    }
  }
} 

  arr=[{// declearing an array with object
    name:"ankit",
    age:19,
    gander:"male"
  },
{
  name:"fatima",
  age:20,
  gander:"femail"
},{
  name:"kunal",
  age:39,
  gander:"male"
}]
fun(arr)// calling the functioon with array perimiter