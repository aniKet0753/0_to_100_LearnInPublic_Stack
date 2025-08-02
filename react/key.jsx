import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function App(){
  return(
    <div style={{display:"flex"}}>
      {[//this is an list ofcomponenet todo where every key should be unique so tht react can understand it correctely 
        <Todo key={1} title={"eating food"} done={false}></Todo>
        ,
        <Todo key={2} title={"going gym"} done={false}></Todo>
        
      ]}
      
    </div>
    
  )
}

function Todo({title,done}){//generic card component and here the childern prop automaticaaly became the prop <Card>
  return <div>
    {title} - {done ? "Done!" :"not done"}
  </div> 
}


export default App;