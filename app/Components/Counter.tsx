"use client";
import React, { useEffect, useState } from 'react'

function Counter() {
  
    const [count, setCount] = useState(0);
  useEffect(()=>{
    alert("count chnged!")
  },[count])
    return (
    <div>
      <div style={{color:"black"}}>
        <div style={{marginLeft:"20px"}}><p>{count}</p></div>
        <div className='countButtons'>
            <button onClick={()=>setCount(count+1)}
            style={{backgroundColor:"rgba(212, 168, 110, 1)",padding:"13px",margin:"10px",borderRadius:"20px"}}>Increase</button>
            <button onClick={()=>setCount(count-1)}
            style={{backgroundColor:"rgb(212, 168, 110,1)",padding:"13px",margin:"10px",borderRadius:"20px"}}>decrease</button>
      
        </div>
      </div>
    </div>
  )
}

export default Counter
