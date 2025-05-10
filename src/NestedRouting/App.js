import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Dashboard from "./Components/dashboard";
import Profile from "./Components/profile";
import Settings from "./Components/settings";

function NestedRouting() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default NestedRouting;
 