import React from 'react'
import img_filledStar from '../../assets/images/carbonstar-filled.svg'

const Stars = ({ count }) => {
    const starArray = Array.from({ length: count }).fill(null);
    
  return (
    <div className="stars">
      {starArray.map((_, index) => (
        <img
          key={index}
          src={img_filledStar}
          alt="a small filled star indicating review score"
        />
      ))}
    </div>
  );
};


export default Stars