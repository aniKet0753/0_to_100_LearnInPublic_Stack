import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function App(){
  return(
    <div style={{display:"flex"}}>
      <Card>
        <div style={{color:"green"}}>
        what do you want to post <br></br>
        <input type={'text'}></input><br></br>
        <button>submit</button>
      </div>
      </Card>
    
      <Card>
        <div style={{
          color:"purple"//this is the card component inner html and contennt thats how we can also define the 
          
        }}>
          <input></input><br></br>
          this is secound div
        </div>
      </Card>
      
    </div>
    
  )
}

function Card({children}){//generic card component and here the childern prop automaticaaly became the prop <Card>
  return <div style={{
    background:"pink", borderRadius:10, color:"white",padding: 10,margin:10
  }}>
    {children}
  </div> 
}


export default App;