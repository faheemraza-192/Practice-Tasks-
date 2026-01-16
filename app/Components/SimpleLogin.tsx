"use client";
import React, { useState } from "react";

function SimpleLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState<{ email: string; password: string }[]>([]);

  const handleLogin = () => {
    if (email === "" || password === "") {
      setMessage("Please fill all fields!");
    } else {
      setMessage("Login Successfully!");
      setData((prevData) => [...prevData, { email, password }]);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <div
        className="border p-5"
        style={{
          borderRadius: "12px",
          maxWidth: "300px",
          margin: "50px auto",
          textAlign: "center",
        }}
      >
        <h2>Login</h2>

        <input
          className="mt-2 border"
          value={email}
          type="email"
          placeholder="Email"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border"
          type="password"
          value={password}
          placeholder="Password"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "#69ffd1",
            borderRadius: "12px",
            border: "1px solid black",
            padding: "10px 20px",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "15px" }}>{message}</p>

        {/* Show all login data with numbering and cross button */}
        {data.map((item, index) => (
          <div
            key={index}
            className="border p-3"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center", // vertical center
              color: "black",
              marginBottom: "10px",
            }}
          >
            <div>
              {index + 1}) Email: {item.email}
              <br />
              Password: {item.password}
            </div>

            {/* Cross button (front-end only) */}
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "red",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimpleLogin;
