import React, { Component, createContext, useContext, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import { prevhoofun  } from "../hooks/prevHook.js";

  function useDebounce(originalfun){
    const currentclock = useRef()

    const fn = () =>{
      clearTimeout(currentclock.current);//this will clear the interval of tinme if user type in every sec inside gioven inuput 
      currentclock.current= setTimeout(originalfun,200)
    }
    return fn
  }


//debouncing : how it works is debounce sands request afeter finishing typing 
//like for example in input field you typing rushing and insted of sending every request on every time 
// the request send after finishinf the typing by putting the timne for input

function App(){

  function sendDatatobackend(){
       fetch("https://api.amazon.com/search/")  
}



  const debouncedfn = useDebounce(sendDatatobackend)

return(
  <div>
    <input type='text' placeholder='type...' onChange={debouncedfn}></input>
  </div>
)
}

export default App;
