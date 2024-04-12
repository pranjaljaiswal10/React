import { useState } from 'react'

import './App.css'
import { useMemo } from 'react'

const users=[{id:'a',name:'Pranjal'},{id:'b',name:'mona'}]

function App() {
const [text,setText]=useState('')
const [search,setSearch]=useState('')
const handleText=(e)=>{
  setText(e.target.value)
} 
 const handleSearch=()=>{
  setSearch(text)
 }

 const filrteredUsers=useMemo(()=>{  users.filter((item)=>{
  console.log('filter fn is unning..')
  return item.name.toLowerCase().includes(search.toLowerCase())
})
 },[search])

  return (
    <div>
    <input type="text" value={text} onChange={handleText}/>
    <button onChange={handleSearch}>search</button>
    <List  users={filrteredUsers}/>
    </div>
  )
}

const List=({users})=>{
  
  return(
   users.map((item)=><li key={item.id}>{item.name}</li>)
  )
}

export default App
