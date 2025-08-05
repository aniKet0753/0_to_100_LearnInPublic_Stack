import React, { Component } from 'react';
import reactLogo from './assets/react.svg';

import { BrowserRouter, Routes,Route,Link,useNavigate,Outlet } from "react-router-dom";
import './App.css';


function App(){
  
//inside the route the all login  ccondentiaselly
return(
  
<BrowserRouter>

<Routes>
  <Route path='/' element={<Laout></Laout>} >
  <Route path='/neet/online-coachinf-class-11' element={<Class11Program />}/>
  <Route path='/neet/online-coaching-class-12' element={<Class12Component />}></Route>
  <Route path='/ymy' element={<Landing />}></Route>
  <Route path='*' element={<Error />}></Route>
  </Route>
</Routes>

</BrowserRouter>
)
}

function Landing(){
  return <div>
    welcome to Aellen
  </div>
}

function Laout(){
  return <div style={{height:"100vh", background:"green"}}>
    <Header />
    <div style={{height:"90vh", background:"red"}}>
      <Outlet />
    </div>
    <div style={{height:100, background:"purple"}}>
      footer
    </div>
  </div>
}
 
function Header(){
  return <div><Link to="/">Home </Link>
<Link to="/neet/online-coachinf-class-11">class11 </Link>
<Link to="/neet/online-coaching-class-12">class12 </Link>
</div>
}

function Error()//default rout handler
{
  return <div>
    something went wrong
  </div>
}

function Class11Program(){
  return <div>
    welcome to the neet 11 class page
  </div>
}
function Class12Component(){
  const navigate = useNavigate()//using  navigate function 
   function redirect(){ navigate('/')}//creating a functiuon and defining it inside route
  return <div>this is class 12 neet page
    <button onClick={redirect}>cklcik</button>
  </div>
  
}
export default App;
