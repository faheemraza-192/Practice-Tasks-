"use client"; // Enables client-side React features in Next.js

import React, { useState } from "react";
import { useFormik } from "formik"; // Handles form state & submission
import * as Yup from "yup";         // Validation rules

function Login() {

  // 🔹 Stores all login records
  const [data, setData] = useState<
    { email: string; password: string }[]
  >([]);

  // 🔹 Message shown to user
  const [message, setMessage] = useState("");

  // 🔹 Stores index when editing (null = add mode)
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // 🔹 Toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // ================= VALIDATION =================
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")   // email format check
      .required("Email is required"),  // cannot be empty

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // ================= FORMIK =================
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema, // attach Yup rules

    onSubmit: (values, actions) => {

      // 🔴 Prevent duplicate email
      const emailExists = data.some(
        (item, index) =>
          item.email === values.email && index !== editIndex
      );

      if (emailExists) {
        setMessage("❌ Email already exists!");
        return;
      }

      // ✏️ Edit existing record
      if (editIndex !== null) {
        const updated = [...data];
        updated[editIndex] = values;
        setData(updated);
        setEditIndex(null);
        setMessage("Updated Successfully ✅");
      }
      // ➕ Add new record
      else {
        setData((prev) => [...prev, values]);
        setMessage("Login Successfully ✅");
      }

      actions.resetForm(); // clear form
    },
  });

  // ================= DELETE =================
  const deleteEntry = (index: number) => {
    setData(data.filter((_, i) => i !== index)); // remove by index
    setMessage("Deleted Successfully ❌");
  };

  // ================= EDIT =================
  const editEntry = (index: number) => {
    formik.setValues(data[index]); // load data into form
    setEditIndex(index);           // enable edit mode
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">

        <h2 className="login-title">Login</h2>

        {/* ================= FORM ================= */}
        <form onSubmit={formik.handleSubmit} className="login-form">

          {/* EMAIL INPUT */}
          <input
            type="email"
            name="email"
            className="login-input"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {/* EMAIL ERROR */}
          {formik.touched.email && formik.errors.email && (
            <p className="error-text">{formik.errors.email}</p>
          )}

          {/* PASSWORD INPUT */}
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="login-input"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {/* PASSWORD ERROR */}
          {formik.touched.password && formik.errors.password && (
            <p className="error-text">{formik.errors.password}</p>
          )}

          {/* SHOW / HIDE PASSWORD */}
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          {/* SUBMIT BUTTON */}
          <button type="submit" className="login-btn">
            {editIndex !== null ? "Update" : "Login"}
          </button>
        </form>

        {/* MESSAGE */}
        <p className="status-text">{message}</p>

        {/* ================= STORED DATA ================= */}
        {data.map((item, index) => (
          <div key={index} className="data-card">

            <p>
              <b>{index + 1})</b> {item.email}
            </p>

            <p>
              Password: {"*".repeat(item.password.length)}
            </p>

            <div className="action-buttons">
              <button onClick={() => editEntry(index)}>✏️ Edit</button>
              <button
                onClick={() => deleteEntry(index)}
                className="delete-btn"
              >
                ❌ Delete
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Login;
