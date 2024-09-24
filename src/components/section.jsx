import React from 'react';
import exampleImage from '../assets/images/bgH2.jpg';
import logo1 from '../assets/images/bed1.jpg'; 
import logo2 from '../assets/images/ease.jpg'; 

const Sections = () => {
  return (
    <div style={{ backgroundColor: "#FFFAF1" }} className="justify-center mx-20 -my-20">
      {/* First Section */}
      
      <section className="flex justify-center flex-col items-center py-5" style={{ Color: "#00000" }}>
      <div className="flex w-full w-7/12 px-30 items-center mb-4">
          <div className="border-t border-dashed w-3/4 border-black" ></div>
          <h3 className="flex w-full justify-center text-2xl font-bold">Safe Landlords . Right Tenants</h3>
          <div className="border-t border-dashed w-3/4 border-black"></div>
        </div>
        <p className="text-center text-xl max-w-3xl py-10">
        At Moshitu, we prioritize creating a safe rental community for everyone by helping you 
minimize the risk of  renting from a landlord to renting out to a tenant. We have a very elaborate open system that
  protects all parties and has Zero tolerance for contractual breaches.
        </p>
      </section>

      {/* Second Section */}
      <section className="bg-green-500 rounded-md mx-60 justify-center items-center pt-12 pb-6 text-center">
        <p className="max-w-4xl text-black text-2xl mx-40 mb-4">
        Unlock powerful features with Moshitu: create and manage listings, oversee user accounts and bookings, and access detailed analytics. 
        Sign up now to start managing your housing portfolio!
        </p>
        <button className="bg-black my-4 border-solid border-2 border-white text-white text-xl px-6 py-4 rounded-md font-semibold">
        Register As A Business
        </button>
      </section>

      {/* Third Section */}
      <section className="flex mx-40 justify-center flex-col md:flex-row items-center py-36">
      <div className="md:w-3/4 px-20 p-4">
          <h2 className="text-2xl font-semibold">Comprehensive Listings</h2>
          <p className="mt-4 text-xl">
          Explore a diverse range of properties tailored to your needs, from budget-friendly shared apartments perfect for students and 
          young professionals to luxurious short-let accommodations ideal for business trips and extended vacations.
          </p>
        </div>
      
      <div className="md:w-3/4 p-4 relative">
          {/* Black background behind the image */}
          <div className="absolute inset-0 bg-black transform -rotate-2 -translate-x-4 translate-y-2 w-full w-6/7  h-70"></div>

          {/* Image with slight rotation */}
          <img
            src={exampleImage}
            alt="Example"
            className="relative w-full h-auto transform rotate-2"
          />
        </div>
       
       
      </section>

      {/* Copy of Third Section */}
      <section className="flex mx-40 pb-20 justify-center flex-col md:flex-row items-center -py-5">
      
      <div className="md:w-3/4 p-4 relative">
          {/* Black background behind the image */}
          <div className="absolute inset-0 bg-black transform -rotate-2 -translate-x-4 translate-y-2 w-full w-6/7  h-full"></div>

          {/* Image with slight rotation */}
          <img
            src={logo2}
            alt="Example"
            style={{ height: '450px' }}
            className="relative object-cover w-full h-2/6 transform rotate-2"
          />
        </div>
        <div className="md:w-3/4 px-20 p-4">
          <h2 className="text-2xl font-semibold">Ease and Convenience</h2>
          <p className="mt-4 text-xl">
          Our intuitive platform, combined with advanced search filters, simplifies the process of finding your perfect home, 
          making it effortless to browse, compare, and select from our wide range of rental options.
          </p>
        </div>
       
      </section>
    </div>
  );
};

export default Sections;
