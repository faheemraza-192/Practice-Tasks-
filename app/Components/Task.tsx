"use client";
import React, { useState } from "react";

// - - - - - T O   D O   L I S T - - - - -

export default function Task() {
  const [task, setTask] = useState("");            // current input
  const [tasks, setTasks] = useState<string[]>([]); // list of tasks

  // ➕ Add a task
  const addTask = () => {
    if (task.trim() === "") return;                // prevent empty tasks
    setTasks([...tasks, task]);                    // add to array
    setTask("");                                   // clear input field
  };

  // ❌ Delete a task
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index)); // remove task by index
  };

// other method to detete   ( Splice Method )
// const deleteTask = (index: number) => {
//     const newTasks = [...tasks]; // copy array
//     newTasks.splice(index, 1);   // remove 1 item at index
//     setTasks(newTasks);          // update state
//   };
  

  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        textAlign: "center",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h2>📝 To-Do List</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #aaa",
        }}
      />

      <button
        onClick={addTask}
        style={{
          marginTop: "10px",
          padding: "7px 12px",
          borderRadius: "8px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                padding: "3px 6px",
                borderRadius: "6px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
