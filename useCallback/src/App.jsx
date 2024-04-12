/* eslint-disable react/prop-types */
import {  useCallback, useState } from 'react'

import './App.css'
import Navbar from './Navbar'

function App() {
   const [count,setCount]=useState(0)
  
  
  // const handleAdjactive=()=> {return "another"+count}
  const handleAdjactive=useCallback(()=> {return "another"+count},[])
  
  return (
    <>
    <Navbar adjactive={"good"} setAdjactive={handleAdjactive}/>
    <button onClick={()=>{setCount(count=>count+1)}}>count:{count}</button>
    </>
  )
}
export default App;
