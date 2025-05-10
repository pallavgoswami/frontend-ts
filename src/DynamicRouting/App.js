
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Post from "./Components/post";
function DynamicRouting() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post/:postid" element={<Post />}>
            Post
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default DynamicRouting;