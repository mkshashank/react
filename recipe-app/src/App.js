import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import "./style.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
