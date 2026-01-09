"use client";
import React, { useState } from 'react'

function Header() {
    const [open, setOpen]=useState(false);
  return (
    <div>
      <header className='header'>
      {/* Top Bar */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>My App</h3>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)}>☰</button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className='optionsDiv'>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      )}
    </header>
    </div>
  )
}

export default Header
