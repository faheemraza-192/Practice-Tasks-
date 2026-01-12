"use client";
import React, { useState, useEffect } from "react";

function Theme() {
  const [dark, setDark] = useState(false);
  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: dark ? "#111" : "#f2f2f2", // balck  or white
          color: dark ? "white" : "black",
        }}
      >
        <h2>{dark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>

        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "10px 20px",
            backgroundColor: dark ? "white" : "black",
            color: dark ? "black" : "white",
            border: "none",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}

export default Theme;
