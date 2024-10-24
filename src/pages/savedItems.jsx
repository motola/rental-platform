import React, {useState} from "react";
import SubHeader from "../components/subheader";
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';  // Heart icon from react-icons
import logo from '../assets/images/bed2.jpg';
import PlainCard from '../components/plainCard';
import Image from "../components/image";



function SavedItems() {

    const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <>
    <div className="pb-20" style={{backgroundColor: '#F6F6F6'}}>
    <SubHeader text="Saved Apartments" />
    <div className="w-1/2 my-10 items-center justify-center mx-10 py-0 border-t border-black rounded-lg shadow-lg p-0 flex" >
      {/* Big Image */}
      {/* <div className="w-4/5 h-80 py-0 my-0">
        <img
          src={logo} // Replace with your big image path
          alt="Big"
          className="w-full h-80 object-cover rounded-l-lg"
        />
      </div> */}
      <Image logo={logo} />
      <PlainCard  favouriteIcon={
        <button onClick={toggleFavorite}> 
        {isFavorited ? <AiFillStar className="ml-24 mr-0 my-0 items-end text-yellow-500" size={36} /> : 
          <AiOutlineStar className="text-gray-400 ml-24 mr-0 my-0 items-end" size={36} />}
        </button>
        } />
      </div>
      </div>
    
    </>
  )
}

export default SavedItems
