import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function App(){
  return (
    <div style={{backgroundColor:"#dfe6e9", height:"100vh", paddingTop:40}}>
      <div style={{display:"flex",justifyContent:"center" }}>
        <div>
        <div>
      <PostComponent 
      name={"ankit"}
      followersCounr={20}
      time={"3m ago"}
      description={"want to know the descount of the recent cources just clcik here"}
      />
    </div>
    <br />
            <div>
      <PostComponent 
      name={"ROhit"}
      followersCounr={"20201"}
  
      description={"this is the description od secound element"}
       />
    </div>
    <br />
    
    </div>
    </div>
    </div>
  )
}
//component
//created a compoonent which has in build css by passing arguments
function PostComponent({name, followersCounr, time, description}){
  return <div style={{width:200,bacgroundColor:"white",background:"white",borderWidth:1,borderRadius:10}}>
    <div style={{display:"flex"}}>
    <img src='https://promptsideas.b-cdn.net/prompts/1951/MRoqWhLUwSMMCU_N3cEE.png' style={{
      width: 30,
      height:30,
      borderRadius:20
    }}></img>
    <div style={{fontSize:10,marginLeft:20}}>
      <b>
        {name}
      </b>
      
      <div>{followersCounr} follower</div>
      
      {(time !== undefined) ? <div style={{display:"flex"}}>
        <div>{time}</div>
        <img src={'https://cdn3.iconfinder.com/data/icons/fitness-182/100/timmer-1024.png' 
         }style={{
          width:12,
          height:12
         }} />
      </div>: null}
    </div>
  </div>
      <div style={{fontSize:12}}>
      {description}
    </div>
  </div>
}





export default App;