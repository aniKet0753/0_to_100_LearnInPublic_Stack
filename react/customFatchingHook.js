import React, { Component, createContext, useContext, useEffect, useRef, useState } from 'react';



export function usefatchHook(url){
  const [fatchData,setData]=useState({});
  
  async function fatching(){
    const responce = await fetch(url);
    const json = await responce.json()
    setData(json)

  }
    useEffect(()=>{
      fatching()
    },[url])//when this was empty dependancy that means fatch only once 
    // after putting url means fatchg the data whenever the change here is url meams url change then refatch the fatchinf() fatching data

    return (
      fatchData.body

    )
}

//in app.jsx

import React, { Component, createContext, useContext, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import { usefatchHook } from '../hooks/usefatch'

function App(){
const [countnum, setCountNum] = useState(1);
const  post =  usefatchHook(`https://jsonplaceholder.typicode.com/posts/${countnum}`)


return (
  <div>
    <button onClick={()=> setCountNum(1)}>1</button>
    <button onClick={()=> setCountNum(2)}>2</button>
    <button onClick={()=> setCountNum(3)}>3</button>
    <button onClick={()=> setCountNum(4)}>4</button>
    <p>
      {JSON.stringify(post) || 'Loading..'}
    </p>
  </div>
)
}

export default App;
