import React, { useState } from "react";

export default function InputForm() {
  const [formData, setFormData] = useState({ name: "", password: "", confirmPassword: ""});
  const [error, setError] = useState({ name: "", password: "", confirmPassword: ""});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newError = { name: "", password: "", confirmPassword: "" };
    let isValid = true;

    if (formData.name.length < 5) {
      newError.name = "Name length must be greater than or equal to 5";
      isValid = false;
    }

    if (formData.password.length < 8 || formData.password.length > 16) {
      newError.password = "Password must be between 8 to 16 characters";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newError.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted");
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <p style={{ color: "red" }}>{error.name}</p>

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <p style={{ color: "red" }}>{error.password}</p>

        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
        </label>
        <p style={{ color: "red" }}>{error.confirmPassword}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
