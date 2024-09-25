import React from 'react';
// import Navbar from '../components/navbar';

const AboutUs = () => {
  return (
    <div>
     
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/path/to/your-hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Building the Future, One Step at a Time</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg mx-auto w-4/5 text-gray-600">
          Our mission is to revolutionize the way people experience technology, pushing the boundaries of innovation to create
          a more connected and efficient world. We aim to deliver exceptional products and services that empower our customers
          and communities.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img src="/path/to/team-member2.jpg" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">CTO</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img src="/path/to/team-member3.jpg" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold">Sara Lee</h3>
            <p className="text-gray-500">Lead Engineer</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-600 mb-2">Innovation</h3>
            <p className="text-gray-600">We constantly seek new ways to improve and innovate in everything we do.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-600 mb-2">Integrity</h3>
            <p className="text-gray-600">Honesty and transparency guide our actions, both internally and externally.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-600 mb-2">Customer Focus</h3>
            <p className="text-gray-600">Our customers are at the heart of everything we do, and we strive to exceed their expectations.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-600 mb-2">Collaboration</h3>
            <p className="text-gray-600">We work together as a team to achieve shared goals and ensure success for everyone.</p>
          </div>
        </div>
      </section>

      {/* Timeline / History Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="list-none">
            <li className="mb-6">
              <span className="text-xl font-semibold">2010:</span> Company founded by John Doe in London.
            </li>
            <li className="mb-6">
              <span className="text-xl font-semibold">2012:</span> Launched our first product, revolutionizing the industry.
            </li>
            <li className="mb-6">
              <span className="text-xl font-semibold">2015:</span> Expanded globally, opening offices in 5 countries.
            </li>
            <li className="mb-6">
              <span className="text-xl font-semibold">2020:</span> Achieved 1 million active users worldwide.
            </li>
            <li>
              <span className="text-xl font-semibold">2023:</span> Continuing our mission of innovation and excellence.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Whether you're looking to collaborate, invest, or learn more about our work, we're excited to hear from you.
        </p>
        <button className="px-8 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
