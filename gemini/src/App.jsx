import {GoogleGenerativeAI} from "@google/generative-ai"

import './App.css'
import { useState } from "react"

function App() {
  
  const [result,setResult]=useState(null)
  const [searchTxt,setSearchTxt]=useState("")
  const genAI=new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_PRO_API_KEY)
  const handleClick=(e)=>{
    e.preventDefault()
  async function getdata(){
    const model=genAI.getGenerativeModel({model:"gemini-pro"})
    const prompt=`Act as a Movie Recommendation system and suggest some movies for the query :${searchTxt} . only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`
    const result=await model.generateContent(prompt);
    const response=await result.response;
    const text=response.text()
    const arr=text.split(", ")
    setResult(arr)
  }
  getdata()
  }
  console.log(result)
  return (
    <>
    <input type="text" value={searchTxt} onChange={(e)=>setSearchTxt(e.target.value)}/>
    <button onClick={handleClick}>click</button>
     <ul>
      {result && result.map((item,index)=>(<li key={index}>{item}</li>))}
     </ul>
    </>
  )
}

export default App
