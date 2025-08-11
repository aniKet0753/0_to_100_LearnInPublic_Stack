import React, { Component, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';

function App(){
//rolling the staes for further use
return(
  <div >
    <LightBulb />
  </div>
)
}

//this is app componenet rander lightbulb 
//and lightbulb compont has a parent state and compont that is going to use futhr in both component
//and it has two more component as a child 
// in child compponent we are using the both state as a childd frfom parent


function LightBulb(){
  const [bulbon, setbulbon]= useState(true)
  return <div>
    <Bulbstate bulbon={bulbon} />
    <ToggleBulbstate bulbon={bulbon} setbulbon={setbulbon}/>
    
  </div>
}

function Bulbstate({bulbon}){
  return <div>
    {bulbon ? "bulb is on" : "bulb is off"}
  </div>
}

function ToggleBulbstate({bulbon,setbulbon}){

  function toggle(){
    setbulbon(!bulbon)
  }

return <div>
  <button onClick={toggle}>Toggele bulb</button>
</div>
}

export default App;
