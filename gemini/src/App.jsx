import {GoogleGenerativeAI} from "@google/generative-ai"

import './App.css'

function App() {
  const genAI=new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_PRO_API_KEY)
  async function getdata(){
    const model=genAI.getGenerativeModel({model:"gemini-pro"})
    const prompt="Act as a Movie Recommendation system and suggest some movies for the query : indian horror. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"
    const result=await model.generateContent(prompt);
    const response=await result.response;
    const text=response.text
    console.log(text)
  }
  getdata()
  return (
    <>
   
    </>
  )
}

export default App
