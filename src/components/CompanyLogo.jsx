import React from 'react';
import googleLogo from '../assets/google-logo.webp'; 
import "../style.css"
const ImageList = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mt-4"> 
      <div className="inline-flex space-x-4 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((e, i) => (
          <img
            key={i}
            src={googleLogo}
            alt={`Google Logo ${i + 1}`}
            className="w-24 h-24 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageList;