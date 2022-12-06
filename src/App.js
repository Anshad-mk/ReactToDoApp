import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
const [toDos,setTodos] = useState([])
const [def,setDef]= useState('')
const letsadd=()=>{
  setTodos([...toDos,def])
setDef('')
console.log(toDos,"todos")
console.log(def,"def")
}


const TodoRe=(index)=>{
  const allitems=[...toDos]
  allitems.splice(index,1)
  setTodos([...allitems])
}
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Date: {new Date().getDay()} - {new Date().getMonth()+1} - {new Date().getFullYear()}  </h2>
      </div>
      <div className="input">
        <input type="text" value={def} onChange={(event)=>setDef(event.target.value)} placeholder="🖊️ Add item..." />
        <i onClick={letsadd} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value,index)=>{
          return(
          <div key={index} className="todo">
          <div className="left">
           
            <li >{value}</li>
          </div>
          <div className="right">
            <i  onClick={()=>{
              TodoRe(index)
            }} className="fas fa-trash-alt"></i>
          </div>
        </div>
        )
          
        })}
        
      </div>
    </div>
  );
}
export default App
