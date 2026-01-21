// Services.tsx - FIXED VERSION
"use client";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import "./Services.css";

// Define TypeScript interface
interface FormData {
  id: number;
  name: string;
  email: string;
  password: string; //ll
  registeredAt: string;
}

function Services() {
  // State to store registered users
  const [registeredUsers, setRegisteredUsers] = useState<FormData[]>([]);
  const [showUsers, setShowUsers] = useState(false);

  // Load users from localStorage on component mount
  useEffect(() => {
    const savedUsers = localStorage.getItem("registeredUsers");
    if (savedUsers) {
      setRegisteredUsers(JSON.parse(savedUsers));
    }
  }, []);

  // ============= Validation Schema =============
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less than 20 characters")
      .required("Name is required!"),
    email: Yup.string()
      .email("Invalid email address!")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required!"),
    confirmpassword: Yup.string()
      .required("Confirm password is required!")
      .oneOf([Yup.ref("password")], "Passwords must match!"),
  });

  // ============= Formik Setup =============
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      // Create new user object
      const newUser: FormData = {
        id: Date.now(),
        name: values.name,
        email: values.email,
        password: "••••••", // Don't store actual password
        registeredAt: new Date().toLocaleString(),
      };

      // Add to registered users
      const updatedUsers = [...registeredUsers, newUser];
      setRegisteredUsers(updatedUsers);
      
      // Save to localStorage
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

      // Show success message
      alert(`✅ Registration Successful!\nWelcome ${values.name}!`);

      // Reset form
      actions.resetForm();
    },
  });

  // ============= Clear All Users =============
  const clearAllUsers = () => {
    if (window.confirm("Are you sure you want to clear all registered users?")) {
      setRegisteredUsers([]);
      localStorage.removeItem("registeredUsers");
      alert("All users have been cleared!");
    }
  };

  // ============= Delete Single User =============
  const deleteUser = (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = registeredUsers.filter(user => user.id !== id);
      setRegisteredUsers(updatedUsers);
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
    }
  };

  // ============= Clear Form Only =============
  const clearFormOnly = () => {
    formik.resetForm();
  };

  return (
    <div className="services-container">
      {/* HEADER */}
      <div className="header">
        <h1 className="title">User Registration System</h1>
        <p className="subtitle">Register new users and view all registrations</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">
        {/* LEFT: REGISTRATION FORM */}
        <div className="form-section">
          <div className="section-header">
            <h2 className="section-title">Registration Form</h2>
            <div className="form-status">
              <span className={`status-indicator ${formik.isValid ? 'valid' : 'invalid'}`}>
                {formik.isValid ? '✓ Valid' : '✗ Invalid'}
              </span>
              <span className="touched-count">
                Filled: {Object.values(formik.values).filter(v => v.trim() !== '').length}/4
              </span>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="form-wrapper">
            {/* NAME FIELD */}
            <div className="input-group">
              <label htmlFor="name" className="label">
                <span className="required">*</span> Full Name
              </label>
              <input
                id="name"
                className={`input ${
                  formik.touched.name && formik.errors.name ? "input-error" : ""
                } ${formik.values.name ? "has-value" : ""}`}
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your full name"
                autoComplete="name"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error-text">{formik.errors.name}</div>
              ) : (
                <div className="hint-text">Min 2, Max 20 characters</div>
              )}
            </div>

            {/* EMAIL FIELD */}
            <div className="input-group">
              <label htmlFor="email" className="label">
                <span className="required">*</span> Email Address
              </label>
              <input
                id="email"
                className={`input ${
                  formik.touched.email && formik.errors.email ? "input-error" : ""
                } ${formik.values.email ? "has-value" : ""}`}
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
                autoComplete="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error-text">{formik.errors.email}</div>
              ) : (
                <div className="hint-text">We'll never share your email</div>
              )}
            </div>

            {/* PASSWORD FIELD */}
            <div className="input-group">
              <label htmlFor="password" className="label">
                <span className="required">*</span> Password
              </label>
              <input
                id="password"
                className={`input ${
                  formik.touched.password && formik.errors.password
                    ? "input-error"
                    : ""
                } ${formik.values.password ? "has-value" : ""}`}
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Create a strong password"
                autoComplete="new-password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error-text">{formik.errors.password}</div>
              ) : (
                <div className="hint-text">Minimum 6 characters</div>
              )}
            </div>

            {/* CONFIRM PASSWORD FIELD */}
            <div className="input-group">
              <label htmlFor="confirmpassword" className="label">
                <span className="required">*</span> Confirm Password
              </label>
              <input
                id="confirmpassword"
                className={`input ${
                  formik.touched.confirmpassword &&
                  formik.errors.confirmpassword
                    ? "input-error"
                    : ""
                } ${formik.values.confirmpassword ? "has-value" : ""}`}
                type="password"
                name="confirmpassword"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Re-enter your password"
                autoComplete="new-password"
              />
              {formik.touched.confirmpassword &&
                formik.errors.confirmpassword ? (
                  <div className="error-text">
                    {formik.errors.confirmpassword}
                  </div>
                ) : (
                  <div className="hint-text">Must match password</div>
                )}
            </div>

            {/* FORM BUTTONS */}
            <div className="form-buttons">
              <button
                type="submit"
                className="submit-button"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                <span className="button-icon">✓</span>
                {formik.isSubmitting ? "Registering..." : "Register Now"}
              </button>

              <div className="secondary-buttons">
                <button
                  type="button"
                  className="reset-button"
                  onClick={clearFormOnly}
                  disabled={!Object.values(formik.values).some(v => v.trim() !== '')}
                >
                  Clear Form
                </button>

                <button
                  type="button"
                  className="toggle-button"
                  onClick={() => setShowUsers(!showUsers)}
                >
                  {showUsers ? "▲ Hide Users" : "▼ Show Users"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT: REGISTERED USERS LIST */}
        <div className={`users-section ${showUsers ? 'visible' : ''}`}>
          <div className="users-header">
            <h2 className="users-title">
              Registered Users ({registeredUsers.length})
            </h2>
            {registeredUsers.length > 0 && (
              <button
                className="clear-all-button"
                onClick={clearAllUsers}
                title="Clear all users"
              >
                🗑️ Clear All
              </button>
            )}
          </div>

          {registeredUsers.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">👤</div>
              <h3>No Users Registered Yet</h3>
              <p>Register a user to see them appear here</p>
            </div>
          ) : (
            <div className="users-list">
              {registeredUsers.map((user) => (
                <div key={user.id} className="user-card">
                  <div className="user-info">
                    <div className="user-avatar">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="user-details">
                      <h4 className="user-name">{user.name}</h4>
                      <p className="user-email">{user.email}</p>
                      <p className="user-meta">
                        <span className="user-password">{user.password}</span>
                        <span className="user-time">• {user.registeredAt}</span>
                      </p>
                    </div>
                  </div>
                  <button
                    className="delete-user-button"
                    onClick={() => deleteUser(user.id)}
                    title="Delete user"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* STATS */}
          {registeredUsers.length > 0 && (
            <div className="users-stats">
              <div className="stat">
                <span className="stat-value">{registeredUsers.length}</span>
                <span className="stat-label">Total Users</span>
              </div>
              <div className="stat">
                <span className="stat-value">
                  {new Set(registeredUsers.map(u => u.email.split('@')[1])).size}
                </span>
                <span className="stat-label">Unique Domains</span>
              </div>
              <div className="stat">
                <span className="stat-value">
                  {registeredUsers.slice(-1)[0]?.name || '-'}
                </span>
                <span className="stat-label">Latest User</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CURRENT FORM DATA PREVIEW */}
      <div className="data-preview">
        <h3 className="preview-title">Current Form Data:</h3>
        <div className="preview-content">
          <div className="preview-row">
            <span className="preview-label">Name:</span>
            <span className={`preview-value ${formik.values.name ? 'filled' : 'empty'}`}>
              {formik.values.name || "Not entered"}
            </span>
          </div>
          <div className="preview-row">
            <span className="preview-label">Email:</span>
            <span className={`preview-value ${formik.values.email ? 'filled' : 'empty'}`}>
              {formik.values.email || "Not entered"}
            </span>
          </div>
          <div className="preview-row">
            <span className="preview-label">Password:</span>
            <span className={`preview-value ${formik.values.password ? 'filled' : 'empty'}`}>
              {formik.values.password ? "••••••" : "Not entered"}
            </span>
          </div>
          <div className="preview-row">
            <span className="preview-label">Confirm Password:</span>
            <span className={`preview-value ${formik.values.confirmpassword ? 'filled' : 'empty'}`}>
              {formik.values.confirmpassword ? "••••••" : "Not entered"}
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <p className="footer-text">
          This is a complete registration system with data persistence.
          All data is stored in your browser's localStorage.
        </p>
        <div className="footer-links">
          <button className="footer-link" onClick={() => window.location.reload()}>
            ↻ Refresh Page
          </button>
          <button className="footer-link" onClick={() => localStorage.clear()}>
            🗑️ Clear All Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;