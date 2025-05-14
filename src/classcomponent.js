import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';

export default class ClassComponent extends React.Component {
  render() {
    return <h2>Hi, this is a class component</h2>;
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <ClassComponent />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();