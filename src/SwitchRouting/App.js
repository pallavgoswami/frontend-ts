import React from "react";
import { BrowserRouter as Router, Link, Switch, Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";

function SwitchRouting() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>

        {/* <Switch> */}
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="*">
            <h1>404 - Page Not Found</h1>
          </Route>
        </Routes>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default SwitchRouting;
