import React, { Component, createContext, useContext, useEffect, useRef, useState } from 'react';



export function prevhoofun(value){
  const ref = useRef();//storing the value

  useEffect(()=>{
    ref.current=value//stored the updted value
  },[value])// this willl call whenever the value get changed


  return ref.current;//store the value
}