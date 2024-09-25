// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup";  // Import the Signup component
import Home from "./pages/Homepage";
import Layout from "./components/layout";  
import Login from "./components/login";
import Booking from "./pages/booking";
import SavedItems from "./pages/savedItems";
import Forgotpassword from "./components/forgotPassword";
import AboutUs from "./pages/about";


import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />} >
         <Route index element={<Home />} />
         {/* Define route for the Signup page */}
          
          <Route path="/booking" element={<Booking />} />
          <Route path="/user/save" element={<SavedItems />} />
          <Route path="/about" element={<AboutUs />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgotpassword />} />
      </Routes>
    </Router>
  );
};

export default App;





