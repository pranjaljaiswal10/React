/* eslint-disable react/prop-types */
import { useCallback, useState } from 'react'
import {v4 as uuidv4} from "uuid"
import './App.css'

function App() {
  const [user,setUsers]=useState([{id:'a',name:"Pranjal"},{id:'b',name:'mona'}])
  const [text,setText]=useState('')
  const handleAddUser=()=>{
    setUsers(user.concat({id:uuidv4(),name:text}))
  }
 const handleRemoveUser=useCallback((id)=>setUsers(user.filter((item)=>item.id!=id)),[user])
 console.log('App')
  return (
    <div>
     <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
     <button onClick={handleAddUser}>Add User</button>
     <List list={user} onRemove={handleRemoveUser}/>
    </div>
  )
}


const List=({list,onRemove})=>{
  console.log('Render:List')
   return(
    <ul>
      {
        list.map((item)=><ListItems key={item.id} item={item} onRemove={onRemove}/>)
      }
    </ul>
   )
}

const ListItems=({item,onRemove})=>{
  console.log('Render:ListItems')
  return(
    <li>
    {item.name} <button onClick={()=>onRemove(item.id)}>remove</button>
    </li>
  )
}
export default App
