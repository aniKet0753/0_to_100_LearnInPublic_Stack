import React, { Component, createContext, useContext, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import { prevhoofun  } from "../hooks/prevHook.js";
import { RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import { counteratom } from '../src/store/atoms/counter.js'
//recoil is nothing but just a copy or like use state hook
//step1: getting external dependency 
//step2: wrapping browser component or main component inside app 
// step3: create an atom



function App(){

  return <div>
    <RecoilRoot>
  <Counter />
  </RecoilRoot>

  </div>
}

function Counter(){
return(
  <div style={{textAlign:'center', marginTop:150}}>
    <Counting />
    <Increase />
    <Decrease />

  </div>
)
}

function Counting(){
  const count = useRecoilValue(counteratom);//this component will subscribe only the value of that atom
  return(
   <div>
  {count}
  </div>
  )
}

function Decrease(){//here we sunscribe the seter from the recoil atom 
  const setcount = useSetRecoilState(counteratom)
  function decrease(){
    setcount(count => count-1)
  }
  return(
  <button onClick={decrease}>decrease</button>
  )
}




function Increase(){//
  const setcount = useSetRecoilState(counteratom)
  function increase(){
    setcount(c => c+1)
  }
  return <div>
    <button onClick={increase}> Increase </button>
  </div>
}

export default App;
