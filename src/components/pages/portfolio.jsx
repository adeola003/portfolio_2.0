import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomPrevArrow, CustomNextArrow } from '../CustonArrows';
import "../../styles/portfolio.css";
import projectsData from '../../assets/projectsData';
import ProjectCard from '../ProjectCard';


const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,

  };

  return (
    <>
      <h2 className='project-title'>Discover what I do</h2>
      <Slider {...settings}>
      {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

        <div className='project-card'>
          <h3>Find more of my completed projects</h3>
          <a href="https://github.com/adeola003?tab=repositories" target='blank'>More projects</a>
          <p>Support me by liking and starring those you prefer</p>
          <p>If you also need something to be done or need a collaboration on a project, don't hesitate. Reach my contact form with the button below</p>
          <a href="/contact" target='blank'>Reach out!</a>
        </div>

      </Slider>
    </>
  );
};

export default Portfolio;
