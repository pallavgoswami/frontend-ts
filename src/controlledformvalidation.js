//controlled components validation forms
import React, { useState } from "react";
export default function ControlledFormValidation() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const newErrors = { name: "", email: "" };
    let isValid = true;
  
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
  
    setError(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted");
    } else {
      console.log("validation failed");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        ></input>
        <br />
        <br />
        <p style={{ color: "red" }}>{error.name}</p>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        ></input>
        <p style={{ color: "red" }}>{error.email}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}