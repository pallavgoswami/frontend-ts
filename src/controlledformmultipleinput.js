import React, { useState } from "react";
export default function ControlledFormMultipleInput() {
  const [formdata, setFormData] = useState({ name: "", email: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formdata);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        Name:
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handleInputChange}
        ></input>
        <br />
        <br />
        Email:
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleInputChange}
        ></input>
        <br />
        <br />
        <button type="submit" onSubmit={handlesubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}