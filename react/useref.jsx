import React, { Component, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';



function App(){
  //learining useref
  const ref = useRef();
  
  function usereffu(){
    ref.current.focus()//React’s useRef should be attached using the ref attribute (not other). So, it should be: ref in input field as an id
  }


return(
  <div>hi there
    <div>
      <input ref={ref} type='text' placeholder='input'></input>
      <button onClick={usereffu}>Submit</button>
      <input type='text' placeholder='input'></input>
    </div>
  </div>
  
)
}
export default App;
