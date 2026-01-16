import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";  
function LoginpracticeForm() {

    // =============  first step: (1)  => FormiK =============
    const formik=useFormik({
initialValues:{
    name:"",
    email:"",
    password:"",
    confirmpassword:""
},
onSubmit:(values, actions)=>{

}
    })
  return (
    <div>
        <div className="mt-5 pt-5 mb-3"   style={{textAlign:"center"}}>
        <form onSubmit={formik.handleSubmit} action="" className="border" style={{width:"fit-content",justifySelf:"center",padding:"15px",borderRadius:"10px"}}> 
          <div >
            <input className="border p-2 m-2" value={formik.values.name} type="text" name="name" placeholder="Your Name  here . . . " />
            <p></p>
          </div>
          <div>
            <input className="border p-2 m-2" value={formik.values.email} type="email" name="email" placeholder="Your Email here . . . " />
          </div>
          <p></p>
          <div>
            <input className="border p-2 m-2" value={formik.values.password} type="password" name="password" placeholder="Your Password here . . . " />
          </div>
          <p></p>
          <div>
            <input className="border p-2 m-2" value={formik.values.confirmpassword} type="password" name="confirmpassword" placeholder="Confirm Your Password . . . " />
          </div>
          <p></p>
        </form>
      </div>
    </div>
  );
}

export default LoginpracticeForm;
