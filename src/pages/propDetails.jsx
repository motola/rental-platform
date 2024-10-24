import React from "react";
import Details from "../components/details";
import img1 from '../assets/images/bed1.jpg';
import img2 from '../assets/images/bed2.jpg';
import img3 from '../assets/images/bed3.jpg';
import img4 from '../assets/images/bgH1.jpg';


const data = {
    bedDescription: "Charming 2-Bedroom Flat in Central London",
    address: "Flat 5, Kensington Apartments, 123 High Street Kensington, London, W8 5SA, United Kingdom",
    price: 199000,
    uploadTime: '2 hours ago',
    thumbnails: [
        img1,
        img2,
        img3,
        img4
    ],
    contact: {
        phone: "0708495093",
        email: "olutolam@gmail.com"
    }

}

const PropertyDetails = () => {
  return (
    <>
    <div className="pt-20 mt-20">
    <Details data={data} />
    </div>
    </>
    
  );
};

export default PropertyDetails;
