import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./Components/home";
import About from "./Components/about";

function NavlinkActiveStyling() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            end
          >
            Home
          </NavLink>{" "}
          |{" "}
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            About
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavlinkActiveStyling;
