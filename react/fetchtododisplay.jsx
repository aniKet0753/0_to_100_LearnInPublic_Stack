import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function App(){
  const [currenttodo,setcount]= useState(1)
  const [tododta,settab]= useState({})
  const [loder, setloder]=useState(true)

  useEffect(function(){
    setloder(true)
    console.log("fatching")
    fetch("https://jsonplaceholder.typicode.com/todos/"+currenttodo)
    .then(async res =>{
    const json = await res.json();
    settab(json)
    setloder(false)
    console.log(tododta.title)
  })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  },[currenttodo])

  return(
    <div style={{
      display:"flex", justifyContent:'center'
    }}>
      <div>
        
        <button onClick={function(){
          setcount(1)
        }} style={ {color: currenttodo ==1 ?"red":"black"}}>Todo1</button>
        
        <button onClick={function(){
          setcount(2)
        }} style={{color: currenttodo ==2 ? "red": "black"}}>Todo2</button>
        
        <button onClick={function(){
          setcount(3)
        }} style={{
          color: currenttodo ==3? "red":"black"
        }}>Todo3</button>

                <button onClick={function(){
          setcount(4)
        }} style={{
          color: currenttodo ==4? "red":"black"
        }}>Todo4</button>
        
      </div><br />
      {loder ? "Loading...":tododta.title}
    </div>
  )
}


export default App;