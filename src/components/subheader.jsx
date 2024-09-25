import React from "react";  

const SubHeader = ({text}) => {
    return (
      <header className="w-full bg-white py-12 my-20 mb-0">
        <h1 className="text-black text-left text-3xl font-bold px-4">
          {text}
        </h1>
      </header>
    );
  };
  
  export default SubHeader;
  