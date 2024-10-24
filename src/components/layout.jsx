import React from 'react';
import { Outlet } from 'react-router-dom';  // To render child components (routes)
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const Layout = () => {
    let dropdownItems =  ["My Bookings", "Saved Apartments", "Logout"]
  return (
  <>
      {/* Header - Fixed on all pages */}
      <Navbar buttonLabel="Profile" dropdownOptions={dropdownItems}  />
      <Outlet />  {/* This renders the specific page based on the route */}
      <Footer />
    

      
   
   </>
  );
};

export default Layout;
