// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup";  // Import the Signup component
import Home from "./pages/Homepage"; 
import Login from "./components/login"
import Booking from "./pages/booking"


import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />

        {/* Define route for the Signup page */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;





