import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="text-black py-12 pb-0" style={{ backgroundColor: "#E6FBF4" }}>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between gap-4">
          {/* First Column - Quick Links */}
          <div className="w-full md:w-1/6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="my-8"><a href="#" className="hover:underline">Home</a></li>
              <li className="my-8"><a href="#" className="hover:underline">About Us</a></li>
              <li className="my-8"><a href="#" className="hover:underline">Services</a></li>
              <li className="my-8"><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Second Column - No Header */}
          <div className="w-full md:w-1/6">
            <ul>
              <li className="mt-14"><a href="#" className="hover:underline">Blog</a></li>
              <li className="my-8"><a href="#" className="hover:underline">Careers</a></li>
              <li className="my-8"><a href="#" className="hover:underline">FAQs</a></li>
              <li className="my-8"><a href="#" className="hover:underline">Support</a></li>
            </ul>
          </div>

          {/* Third Column - Resources */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul>
              <li className="my-8"><a href="#" className="hover:underline">Documentation</a></li>
              <li className="my-8"><a href="#" className="hover:underline">API Reference</a></li>
              <li className="my-8"><a href="#" className="hover:underline">Community</a></li>
              <li className="my-8"><a href="#" className="hover:underline">Tutorials</a></li>
            </ul>
          </div>

          {/* Fourth Column - Contact with Social Media Icons */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul>
              <li className="my-8"><a href="#" className="hover:underline">Email: info@company.com</a></li>
              <li className="my-8"><a href="#" className="hover:underline">Phone: +123 456 7890</a></li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Curved effect using an SVG */}
      <div className="text-white py-2" style={{ backgroundColor: '#025C3D',  height: '150px', clipPath: 'polygon(50% 0%, 350% 200%, -180% 100%)' }}>
        <div className="container mx-auto flex justify-between items-center z-10">
          {/* Left Side - Copyright Info */}
          <div className="py-20 pb-0 text-left">
            <p>&copy; 2024 Moshitu. All rights reserved.</p>
          </div>

          {/* Right Side - Company Name */}
          <div className="py-20 pb-0 text-right">
            <p>Powered by <span className="font-bold">Moshitu</span></p>
          </div>
        </div>
      </div>
    </footer>
        
    
      </>
  );
};

export default Footer;
