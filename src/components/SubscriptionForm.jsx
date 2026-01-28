import React, { useState } from "react";

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agree: false
  });

  const [errors, setErrors] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { name: "", email: "" };
    let formIsValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid && formData.agree) {
      alert("Subscription Successful!");
      setFormData({ name: "", email: "", agree: false });
      setErrors({ name: "", email: "" });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Subscribe</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.name && <p style={{ color: "red", marginTop: "5px" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && <p style={{ color: "red", marginTop: "5px" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            I agree to the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          disabled={!formData.agree}
          style={{
            width: "100%",
            padding: "10px",
            background: formData.agree ? "#007BFF" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: formData.agree ? "pointer" : "not-allowed"
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
