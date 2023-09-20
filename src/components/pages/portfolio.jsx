import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
  const settings = {
    // Slick settings go here
    // For example:
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  //   prevArrow: <CustomPrevArrow />,
  // nextArrow: <CustomNextArrow />,

  };

  return (
    <div>
      <h2>My Portfolio</h2>
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Portfolio;
