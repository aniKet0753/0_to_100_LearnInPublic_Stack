import React, { Component, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';


// we use useref just to store the value inside iot and after re randering the component it should not re rander again  and we can use that ref stored variable insidse other 
//things further

function App(){
  const [count, setcount]=useState(0);
  const time = useRef();



  function startfunction(){
    const value =setInterval(function(){
      setcount(c => c +1)
     },1000);
     time.current= value;
    }
  
function stopcolock(){
  clearInterval(time.current)
}


return(
  <div style={{height:1000,width:1000,backgroundColor:"red",textAlign:"center",paddingTop:100
  }}>
    {count}<div><br/>
    <button  onClick={startfunction}>Start</button>
    <button   onClick={stopcolock}>Stop</button>
    </div>
  </div>
  
)
}
export default App;
