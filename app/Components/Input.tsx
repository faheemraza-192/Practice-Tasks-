"use client";
import React,{useState, useEffect} from 'react'

function Input() {

  const [text, setText] = useState("");
    return (
    <div style={{marginLeft:"20px",padding:"15px",borderRadius:"22px"}}>
      <input onChange={(e)=>setText(e.target.value)} type="text" style={{border:"1px solid black"}} placeholder='enter your text here' />
      <p className='mt-2'>{text}</p>
    </div>
  )
}

export default Input
