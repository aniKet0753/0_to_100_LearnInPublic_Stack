import React, { Component, createContext, useContext, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import { prevhoofun  } from "../hooks/prevHook.js";

//using Useprevhoook to storing the data or value of previous one 

function App(){

  const [state, setState] = useState(0)
  const prev = prevhoofun(state)

return (
  <>
    <p>{state}</p>
    <button onClick={()=>{
      setState((curr)=> curr +1);
    }}>Click me</button>
    <p>previous {prev}</p>
  </>
)
}

export default App;
