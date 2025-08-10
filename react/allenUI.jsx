import React, { Component, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';

import { BrowserRouter, Routes,Route,Link,useNavigate,Outlet } from "react-router-dom";
import './App.css';


function App(){
//inside the route the all login  ccondentiaselly


return(
  
<BrowserRouter>

<Routes>
  <Route path='/' element={<Laout></Laout>} >
  <Route path='*' element={<Error />}></Route>
  </Route>
</Routes>

</BrowserRouter>
)
}

function Laout(){
  return <div style={{height:"100vh"}}>

    <Header />

    <div style={{height:"90vh", background:"red", textAlign:"center",paddingTop:20,backgroundColor:"rgb(238, 238, 238)"}}>
      <img src='https://www.allen.ac.in/slider/images/result/2021_NEET.jpg' style={{width:750,borderRadius:20}}></img>

      <div style={{height:300,backgroundColor:"white",marginTop:50}}><p style={{backgroundColor:"white",textAlign:"left",paddingLeft:110}}><b style={{backgroundColor:"white"}}>Pick the right course for you</b></p>
      <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"white",paddingLeft:40}}>
        
        <div style={{backgroundColor:"rgb(238, 238, 238)",height:140,width:170,borderRadius:10,textAlign:"left",paddingLeft:10}}>NEETCourses
          <div style={{marginTop:90,backgroundColor:"rgb(238, 238, 238)"}}><a href='https://allen.in/neet' style={{backgroundColor:"rgb(238, 238, 238)",fontSize:11,fontFamily:"Roboto"}}>View Courses</a></div>
        </div>
        <div style={{backgroundColor:"rgb(238, 238, 238)",height:140,width:170,borderRadius:10,textAlign:"left",paddingLeft:10}}>JEECourses
          <div style={{marginTop:90,backgroundColor:"rgb(238, 238, 238)"}}><a href='https://allen.in/jee' style={{backgroundColor:"rgb(238, 238, 238)",fontSize:11,fontFamily:"Roboto"}}>View Courses</a></div>
        </div>
        <div style={{backgroundColor:"rgb(238, 238, 238)",height:140,width:170,borderRadius:10,textAlign:"left",paddingLeft:10}}>Courses for class-10
          <div style={{marginTop:90,backgroundColor:"rgb(238, 238, 238)"}}><a href='https://allen.in/classes-6-10' style={{backgroundColor:"rgb(238, 238, 238)",fontSize:11,fontFamily:"Roboto"}}>View Courses</a></div>
        </div>
      </div >
      </div>
     
      <Outlet />
    </div>

    <div style={{display:"flex",fontSize:13}}>
    <div style={{backgroundColor:"rgb(238, 238, 238)"}}><b style={{backgroundColor:"rgb(238, 238, 238)"}}>About</b><br />
About us<br ></br>
Blog<br></br>
News<br></br>
MyExam EduBlogs<br></br>
Privacy policy<br></br>
Public notice<br></br>
Careers<br></br>
Dhoni Inspires NEET Aspirants<br></br>
Dhoni Inspires JEE Aspirants</div>

<div style={{backgroundColor:"rgb(238, 238, 238)"}}>
  <b style={{backgroundColor:"rgb(238, 238, 238)"}}>Help & Support</b>
<br />Refund policy
Transfer policy<br></br>
Terms & Conditions<br></br>
Contact us<br></br>
</div>

<div style={{backgroundColor:"rgb(238, 238, 238)"}}><b style={{backgroundColor:"rgb(238, 238, 238)"}}>Popular goals<b/></b><br></br>
NEET Coaching<br></br>
JEE Coaching
6th to 10th</div>
<div style={{backgroundColor:"rgb(238, 238, 238)"}}><b style={{backgroundColor:"rgb(238, 238, 238)"}}>Courses</b><br></br>
Online Courses<br></br>
Distance Learning<br></br>
Online Test Series<br></br>
International Olympiads Online Course<br></br>
NEET Test Series<br></br>
JEE Test Series<br></br>
JEE Main Test Series<br></br>
</div>

<div style={{backgroundColor:"rgb(238, 238, 238)"}}>
  <b style={{backgroundColor:"rgb(238, 238, 238)"}}>Centers</b><br></br>
Kota<br></br>
Bangalore<br></br>
Indore<br></br>
Delhi<br></br>
More centres<br></br>
</div>

<div style={{backgroundColor:"rgb(238, 238, 238)"}}>
  <b style={{backgroundColor:"rgb(238, 238, 238)"}}>Exam information</b><br></br>
JEE Main<br></br>
JEE Advanced<br></br>
NEET UG<br></br>
CBSE<br></br>
NCERT Solutions<br></br>
Olympiad<br></br>
NEET 2025 Results<br></br>
NEET 2025 Answer Key<br></br>
NEET College Predictor<br></br>
NEET 2025 Counselling<br></br>
ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.<br></br>


</div>
  </div>
  </div>
}




function Header(){
  return <div style={{position:"sticky",top:0}}><div style={{backgroundColor:"white",height:40,display:"flex",justifyContent:"space-around",}}>
    <img src='https://images.seeklogo.com/logo-png/48/1/allen-career-institute-logo-png_seeklogo-482569.png' style={{height:40,width:45}}></img>
    <div style={{backgroundColor:"white",marginTop:9,marginRight:400}}>
      
    <Link  style={{backgroundColor:"white",marginRight:21,color:"#282A3A"}}>Course</Link>
    <Link style={{backgroundColor:"white",marginRight:21,color:"#282A3A"}}>TestSeries</Link>
    <Link style={{backgroundColor:"white",marginRight:21,color:"#282A3A"}}>Classroom</Link>
    <Link style={{backgroundColor:"white",marginRight:21,color:"#282A3A"}}>Results</Link>
    <Link style={{backgroundColor:"white",marginRight:2,color:"#282A3A"}}>More</Link>
    </div>
        <a href='*'style={{backgroundColor:"white",marginTop:3}} > <img src='https://www.nicepng.com/png/detail/129-1296997_phone-call-free-vector-icons-designed-freepik-free.png' style={{borderRadius:30,height:35,width:40,backgroundColor:"white"}}></img>
</a>
</div>
<div style={{backgroundColor:"#4169e1",fontFamily:"serif",fontSize:12,textAlign:"center",padding:8}}><a href='/offer' style={{color:"white",backgroundColor:"#4169e1"}}>📢HURRY!, New phase of Self-Study Courses & Test Series begins 10 Aug</a></div>
</div>
}

function Error()//default rout handler
{
  return <div>
    something went wrong
  </div>
}

export default App;
