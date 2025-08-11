import React, { Component, createContext, useContext, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';

const BulbContext = createContext();

function App(){
    const [bulbon, setbulbon]= useState(true)
return(
  <div >
    <BulbContext.Provider value={{
      bulbon:bulbon,
      setbulbon:setbulbon
    }}>
    <LightBulb />
    </BulbContext.Provider>
  </div>
)
}

//for simplifiy the accesing the value frome one place to another we use context api and wrag those  component which is going to be used by thosees componenet 
//and we pass these value as an prmpt inside that functioni where they want to used that 

function LightBulb(){
  return <div>
    <Bulbstate  />
    <ToggleBulbstate />
    
  </div>
}

function Bulbstate(){
  const { bulbon }= useContext(BulbContext)
  return <div>
    {bulbon ? "bulb is on" : "bulb is off"}
  </div>
}

function ToggleBulbstate(){
  const { bulbon,setbulbon }= useContext(BulbContext)

  function toggle(){
    setbulbon(!bulbon)
  }

return <div>
  <button onClick={toggle}>Toggele bulb</button>
</div>
}

export default App;
