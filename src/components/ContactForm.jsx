import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = { name: "", email: "", message: "" };
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

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            formIsValid = false;
        }

        setErrors(newErrors);

        if (formIsValid) {
            alert("Form submitted successfully!");
            setFormData({ name: "", email: "", message: "" });
            setErrors({ name: "", email: "", message: "" });
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2 style={{ textAlign: "center" }}>Contact Us</h2>
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
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                    {errors.message && <p style={{ color: "red", marginTop: "5px" }}>{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        background: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px"
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
