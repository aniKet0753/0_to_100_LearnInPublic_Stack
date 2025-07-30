import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// function App() {
//   const [todo, setTodo] = useState([
//     { // initially we have one data in state
//       title: "gym", // fixed spelling from "tittle" to "title"
//       description: "I have to go to gym and do cardio",
//       done: false
//     }
//   ]);

//   function caller() {
//     let array = [];
//     for (let i = 0; i < todo.length; i++) {
//       array.push(todo[i]); // copy existing todos
//     }
//     array.push({
//       title: document.getElementById("input").value,
//       description: document.getElementById("description").value,
//       done: false // typically new tasks start as not done
//     });
//     setTodo(array);
//   }

//   return (//        //to display todos tht json.stringfy
//     <div className="App">
//       <div>
//         <input id="input" type='text' placeholder='title' />
//         <input id="description" type='text' placeholder='description' />
//         <button onClick={caller}>add todo</button>
//         {JSON.stringify(todo)}
//       </div>

//     </div>
//   );

//learning usestate 

function App() {
  return (
    <div>
      <Component />
    </div>
  );
}

// function Component(){
//  const [count,setcount]= useState(0)
//  function counterfunction(){
//   setcount(count+1)
//  }
//  function descrisefun(){
//   setcount(count-1)
//  }
//   return(
//   <div>
//     <h1>{count}</h1>
//     <button onClick={counterfunction}>increase</button>
//     <button onClick={descrisefun}>descrise</button>
//     </div>
//   )
//     }


//creating clock
function Component(){
  const [count,setcount]=useState(0)
  useEffect(function(){
   let clock=setInterval(function(){
    setcount(count => count+1)
   }, 1000);
   return function(){
    clearInterval(clock)//wen component unmount
   }
  },[])

    return(
  <div>
    <h1>{count}</h1>
    </div>
  )
}



//we can also deine the componenet like this
function App() {
  const [count , setcount] = useState(0);
  function increase(){
    setcount( c=>c+1)
  }
  return (
    <div>
      <Component count={count}/>
      <button onClick={increase}>increase</button>
    </div>
  );
}

function Component(props){
  useEffect(function(){
    console.log("mont");

    return function(){
      console.log("unouunt")
    }
  },[])
  return <div>
    counter {props.count}
  </div>
}



export default App;