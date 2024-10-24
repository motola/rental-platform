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
import Listing from "./pages/listings";
import Admin from "./components/admin";
import Details from "./pages/propDetails";
import Message from "./components/message"
// import Fizz from "./components/fizz"


import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />} >
         <Route index element={<Home />} />
         {/* Define route for the Signup page */}
          
          <Route path="/booking" element={<Booking />} />
          <Route path="/save" element={<SavedItems />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/details" element={<Details />} />
          <Route path="/message" element={<Message />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgotpassword />} />
          <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;





