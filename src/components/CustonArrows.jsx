import React from 'react';

const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <FaArrowRight />
  </div>
);

export { CustomPrevArrow, CustomNextArrow };
