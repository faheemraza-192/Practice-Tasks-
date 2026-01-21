"use client";
import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
function LoginpracticeForm() {


    // =============  second step: (2)  => YuP Validation =============
    const validationSchema = Yup.object({
        name:Yup.string().min(2).max(12).required("Name is required!"),
        email:Yup.string().email("ïnvalid email!").required("Email is required!"),
        password:Yup.string().min(6).max(11).required("Password must be atleast 6 characters!"),
        confirmpassword:Yup.string().required("confirm password is required!").oneOf([Yup.ref("password")],"password must match!"),
    });


    // =============  first step: (1)  => FormiK =============
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema:validationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });
  return (
    <div>
      <div className="mt-5 pt-5 mb-3" style={{ textAlign: "center" }}>
        <form
          onSubmit={formik.handleSubmit}
          action=""
          className="border"
          style={{
            width: "fit-content",
            justifySelf: "center",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <div>
            <input
              className="border p-2 m-2"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="name"
              placeholder="Your Name  here . . . "
            />
            <p style={{color:"red"}}>{formik.touched.name && formik.errors.name}</p>
          </div>
          <div>
            <input
              className="border p-2 m-2"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              name="email"
              placeholder="Your Email here . . . "
            />
          </div>
          <p style={{color:"red"}}>{formik.touched.email && formik.errors.email}</p>
          <div>
            <input
              className="border p-2 m-2"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              name="password"
              placeholder="Your Password here . . . "
            />
          </div>
          <p className="" style={{color:"red"}}>{formik.touched.password && formik.errors.password}</p>
          <div>
            <input
              className="border p-2 m-2"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              name="confirmpassword"
              placeholder="Confirm Your Password . . . "
            />
          </div>
          <p style={{color:"red"}}>{formik.touched.confirmpassword && formik.errors.confirmpassword}</p>
          <div>
            <button type="submit"
              className=""
              style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "10px",
                padding: "8px",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginpracticeForm;
