import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import BookCatalogue from "./components/BookCatalogue";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/books" element={<BookCatalogue />} />
    </Routes>
  );
}

export default App;
