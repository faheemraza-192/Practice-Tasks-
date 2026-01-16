import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";  
function LoginpracticeForm() {
  return (
    <div>
        <div className="mt-5 pt-5 mb-3"   style={{textAlign:"center"}}>
        <form action="" className="border" style={{width:"fit-content",justifySelf:"center",padding:"15px"}}> 
          <div >
            <input className="border p-2 m-2" type="text" name="name" placeholder="Your Name  here . . . " />
            <p></p>
          </div>
          <div>
            <input className="border p-2 m-2" type="email" name="email" placeholder="Your Email here . . . " />
          </div>
          <p></p>
          <div>
            <input className="border p-2 m-2" type="password" name="password" placeholder="Your Password here . . . " />
          </div>
          <p></p>
          <div>
            <input className="border p-2 m-2" type="password" name="confirmpassword" placeholder="Confirm Your Password . . . " />
          </div>
          <p></p>
        </form>
      </div>
    </div>
  );
}

export default LoginpracticeForm;
