
import openai from './openai';

import './App.css'

function App() {
  async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content:  "Act as a Movie Recommendation system and suggest some movies for the query : indian horror. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya" }],
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion)
  }
main()


  return (
    <>
    
    </>
  )
}

export default App
