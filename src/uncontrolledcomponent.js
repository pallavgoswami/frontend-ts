import React, { useRef } from "react";
export default function UncontrolledForm() {
  const nameref = useRef();
  const emailref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", nameref.current.value);
    console.log("Email: ", emailref.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:<input type="text" ref={nameref}></input>
        <br />
        <br />
        Email:<input type="text" ref={emailref}></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
