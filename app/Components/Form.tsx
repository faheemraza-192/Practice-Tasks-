"use client";
import React, { useEffect, useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [validmessage, setValidmessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (username === "" && password === "") {
      setValidmessage("form is invalid!");
      setMessage("All fields are required!");
    } else if (username === "") {
      setMessage("username is required!");
      setValidmessage("form is invalid!");
    } else if (password === "") {
      setMessage("password is required!");
      setValidmessage("form is invalid!");
    } else if (password.length < 6) {
      setMessage("password must be atleast 6 characters!");
      setValidmessage("form is invalid!");
    } else if (password.length > 12) {
      setMessage("password length  is too long!");
      setValidmessage("form is invalid!");
      setIsValid(false);
    } else if (
      username !== "" &&
      password.length > 5 &&
      password.length <= 12
    )
    {
      setMessage("form is valid ✅");
      setValidmessage("form is valid ✅");
      setIsValid(true);
      // setValidmessage(true)
    } else {
      setMessage("for is not valid:");
      setValidmessage("form is invalid!");
      setIsValid(false);
    }
    
  }, [username, password]);
  const [reset, setReset]=useState("");

  // when already  empty username oand password thn print msg alredady reset
  const resetall = () => {
    if (username === "" && password === "") {
      setReset("already reset");
      return;
    }
  
    setUsername("");
    setPassword("");
    setReset("reset done");
    setIsValid(false);
    setMessage("");
    setValidmessage("");
  };
  return (
    <div>
      <div className="mt-3 mb-3 ml-2">
        <h1>Login</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username" value={username}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password" value={password}
        />
        <p style={{ color: isValid ? "green" : "red" }}>{message}</p>
        <p>{validmessage}</p>
        <button
          disabled={!isValid}
          style={{
            backgroundColor: "aqua",
            border: "1px solid black",
            borderRadius: "20px",
            padding: "7px 14px",
            margin: "7px",
          }}
        >
          login
        </button>
        <button onClick={resetall}>reset</button>
        <p>{reset}</p>
      </div>
    </div>
  );
}

export default Form;
