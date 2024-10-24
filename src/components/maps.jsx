import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const MapComponent = ({ address }) => {
  const [coordinates, setCoordinates] = useState(null);

  const mapContainerStyle = {
    width: "85%",
    height: "500px",
    margin:"auto"
  };

  const apiKey = "AIzaSyA1wsMZfsH0nV5UEXa6d7n60g_DBj-MCU0" 

  // Function to get latitude and longitude from the address using Google Geocoding API
  const getCoordinates = async (address) => {
    // Replace with your Google Maps API key
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    try {
      const response = await axios.get(geocodeUrl);
      
      const location = response.data.results[0].geometry.location;
      console.log(location);
      
      setCoordinates({ lat: location.lat, lng: location.lng });
    } catch (error) {
      console.error("Error fetching coordinates: ", error);
    }
  };
  // Fetch coordinates when the address prop changes
  useEffect(() => {
    if (address) {
      getCoordinates(address);
    }
  }, [address]);

 

  return (
    <div className="p-4">
      {/* <h2 className="text-lg font-bold mb-4">Map Location for: {address}</h2> */}

      {/* Display Google Map based on coordinates */}
      {coordinates ? (
        <div className="mt-4">
          <LoadScript googleMapsApiKey="AIzaSyA1wsMZfsH0nV5UEXa6d7n60g_DBj-MCU0">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={coordinates}
              zoom={15}
            >
              <Marker position={coordinates} />
            </GoogleMap>
          </LoadScript>
        </div>
      ) : (
        <p className="text-gray-500">Loading map for {address}...</p>
      )}
    </div>
  );
};

export default MapComponent;
