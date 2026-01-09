"use client";
import React, { useState, useEffect } from "react";

function Stopwatch() {
  // ======= First Stopwatch (Simple seconds) =======
  const [seconds1, setSeconds1] = useState(0);
  const [running1, setRunning1] = useState(false);

  useEffect(() => {
    let timer1: any;
    if (running1) {
      timer1 = setInterval(() => {
        setSeconds1((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer1);
  }, [running1]);

  // ======= Second Stopwatch (H:M:S:MS) =======
  const [time2, setTime2] = useState(0); // milliseconds
  const [running2, setRunning2] = useState(false);

  useEffect(() => {
    let timer2: any;
    if (running2) {
      timer2 = setInterval(() => {
        setTime2((prev) => prev + 10); // update every 10ms
      }, 10);
    }
    return () => clearInterval(timer2);
  }, [running2]);

  // ⏱️ Time calculations for second stopwatch
  const hours2 = Math.floor(time2 / (1000 * 60 * 60));
  const minutes2 = Math.floor((time2 / (1000 * 60)) % 60);
  const seconds2 = Math.floor((time2 / 1000) % 60);
  const milliseconds2 = Math.floor((time2 % 1000) / 10);

  const format = (num: number) => num.toString().padStart(2, "0");
  return (
    <div>
      {/* ====== Stopwatch 1 ====== */}
      <div className="ml-5 pl-5">
        <h3>Stopwatch 1 (Seconds only)</h3>
        <p>{seconds1} sec</p>
        <button
          onClick={() => setRunning1(true)}
          style={{
            color: "white",
            backgroundColor: "green",
            borderRadius: "16px",
            padding: "7px 12px",
            border: "1px solid black",
            marginRight: "5px",
          }}
        >
          Start
        </button>
        <button
          onClick={() => setRunning1(false)}
          style={{
            color: "white",
            backgroundColor: "blue",
            borderRadius: "16px",
            padding: "7px 12px",
            border: "1px solid black",
            marginRight: "5px",
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            setSeconds1(0);
            setRunning1(false);
          }}
          style={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "16px",
            padding: "7px 12px",
            border: "1px solid black",
          }}
        >
          Reset
        </button>
      </div>

      <hr />

      {/* ====== Stopwatch 2 ====== */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3>Stopwatch 2 (HH:MM:SS:MS)</h3>
        <h1 style={{ fontSize: "40px" }}>
          {format(hours2)} : {format(minutes2)} : {format(seconds2)} : {format(milliseconds2)}
        </h1>

        <button
          onClick={() => setRunning2(true)}
          style={{
            color: "white",
            backgroundColor: "green",
            borderRadius: "16px",
            marginRight: "10px",
            padding: "7px 12px",
            border: "1px solid black",
          }}
        >
          Start
        </button>
        <button
          onClick={() => setRunning2(false)}
          style={{
            color: "white",
            backgroundColor: "blue",
            borderRadius: "16px",
            padding: "7px 12px",
            border: "1px solid black",
            margin: "0px 10px",
          }}
        >
          Stop
        </button>
        <button style={{ color: "white",
            backgroundColor: "black",
            borderRadius: "16px",
            padding: "7px 12px",
            border: "1px solid black",
          }}
          onClick={() => {
            setRunning2(false);
            setTime2(0);
          }} 
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
