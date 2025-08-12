import React, { Component, createContext, useContext, useEffect, useRef, useState } from 'react';

export function useGetPostBody(){
  const [data ,setdata]=useState({})

  async function getdatafromfatch(){
    const responce= await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json = await responce.json();
    setdata(json)
  }
  
  useEffect(()=> {
    getdatafromfatch()
  },[])
  return  data.body
}
/// this is jsx app function where data rsnder on main page 

// or maybe u can say that this is maun page and we are exporting that custom hook from external folder 

import React, { Component, createContext, useContext, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import { useGetPostBody } from '../hooks/usefatch.js'

function App(){

const post = useGetPostBody();


return (
  <div>
    <p>
      {post || 'Loading..'}
    </p>
  </div>
)
}

export default App;
