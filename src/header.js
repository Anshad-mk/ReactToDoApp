import React,{Component, useState} from 'react'
function Header() {
    const [count, setCount]= useState(0)

    const incrimnt =()=>{
        setCount(count + 1)
    }
    const decrimnt =()=>{
        setCount(count - 1)
    }

         return( 
        <div>

<h1>counter:{count}</h1> 
<button onClick={incrimnt}>+</button>
<button onClick={decrimnt}>-</button>

 


        </div>
    )
    
}


export default Header