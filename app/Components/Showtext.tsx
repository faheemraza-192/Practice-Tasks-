"use client";
import React, {useState, useEffect} from 'react'

function Showtext() {
    const [text, setText] = useState("");
  return (
    <div>
      
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Type something</h2>

      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        You typed: <b>{text}</b>
      </p>
    </div>
    
    </div>
  )
}

export default Showtext
