"use client";
import React from "react";

function loginpractice() {
  return (
    <div>
      <div className="m-auto"  style={{width:"100%",textAlign:"center",alignItems:"center"}}>
        <form style={{textAlign:"center",alignItems:"center"}} action="">
          <div>
            <input type="text" placeholder="Your Name  here . . . " />
            <p></p>
          </div>
          <div>
            <input type="text" placeholder="Your Email here . . . " />
          </div>
          <p></p>
          <div>
            <input type="text" placeholder="Your Password here . . . " />
          </div>
          <p></p>
          <div>
            <input type="text" placeholder="Confirm Your Password . . . " />
          </div>
          <p></p>
        </form>
      </div>
    </div>
  );
}

export default loginpractice;
