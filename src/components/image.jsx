import React from "react";
import defaultImage from "../assets/images/bed1.jpg"

const Image = ({logo}) => {
return (
    <>
<div className="w-5/5 h-80 py-0 my-0">
<img
  src={logo} // Replace with your big image path
  alt="Big"
  className="w-full h-80 object-cover rounded-l-lg"
/>
</div>
</>
)
}

Image.defaultProps = {
  logo: defaultImage
}

export default Image