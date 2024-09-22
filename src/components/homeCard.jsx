import React from 'react';
import exampleImage from '../assets/images/bgH2.jpg'; // Replace with your image path

const HomeCard = () => {
  return (
    <div>
      {/* First Section - Left Aligned H1 */}
      <section className="py-40 px-20 pb-0">
        <h1 className="text-3xl font-bold text-left">Need a Guide? to Stay Informed</h1>
      </section>

      {/* Second Section - Row of Cards */}
      <section className="py-16 items-center">
        <div className="flex justify-center flex-wrap gap-40">
          {/* Card 1 */}
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:w-1/4 border-black border-l border-r border-b rounded-lg">
            <img src={exampleImage} alt="Card Image 1" className="w-full h-48 object-cover" />
            <div className="p-6 bg-white">
              <h2 className="text-2xl font-semibold mb-2">Charming 2-Bedroom Flat in Central London</h2>
              <p className="mb-4">
              Spacious 2-bedroom flat with open-plan living, modern kitchen, and ample storage. Close to transport, shops, and...
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/4 border-black border-l border-r border-b rounded-lg">
            <img src={exampleImage} alt="Card Image 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Charming 4-Bedroom Flat in Bradford</h2>
              <p className="mb-4">
              Spacious 2-bedroom flat with open-plan living, modern kitchen, and ample storage. Close to transport, shops, and...
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/4 border-black border-l border-r border-b rounded-lg">
            <img src={exampleImage} alt="Card Image 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Charming 3-Bedroom Flat in Bradford</h2>
              <p className="mb-4">
              Spacious 2-bedroom flat with open-plan living, modern kitchen, and ample storage. Close to transport, shops, and...
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold">
                Learn More
              </button>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default HomeCard;
