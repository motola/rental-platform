// src/App.js
import React from "react";

import Navbar from "../components/navbar";
import SubHeader from "../components/subheader";
import HouseCard from "../components/houseCard";
import Uploads from "../components/latestUploads";


 

const Booking = () => {
    
  return (
   
    <>
    <SubHeader text="My Bookings" />
    <div className="px-40 pt-20 items-start flex" style= {{backgroundColor: '#F6F6F6'}}>
    <HouseCard />
     
    
    <Uploads />
    </div>
    
    </>
  );
};

export default Booking;





