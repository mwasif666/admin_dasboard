import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
