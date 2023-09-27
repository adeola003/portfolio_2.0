import { useState } from 'react';
import Modal from './Modal';
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project-card">
      {project.live ? (<a className='main-img-link' href={project.live} target='blank'><img className='project-main-img' src={project.screenshots[0]} alt={project.name} /></a>) : (<a className='main-img-link' href={project.github} target='blank'><img className='project-main-img' src={project.screenshots[0]} alt={project.name} /></a>)}
      <div className="project-details">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>Technologies: {project.techStack.join(', ')}</p>
        <div className='project-buttons'>
          <button className='details-btn' onClick={openModal}>Details</button>
          <button className='details-btn'><a className='details-btn-links' href={project.github} target='blank'>See source</a></button>
          {project.live ? (<button className='details-btn'><a className='details-btn-links' href={project.live} target='blank'>Live site</a></button>) : null}
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {/* Content for the modal */}
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className='modal-images'>
            {/* Display more screenshots */}
            {project.screenshots.map((screenshot, index) => (
              <a className='screen-link' key={index} href={screenshot} target='blank'><img className='modal-image' src={screenshot} alt={`Screenshot ${index + 1}`} /></a>
            ))}
          </div>
          <div className='modal-links'>
            {/* Links to GitHub and live version */}
            <a href={project.github} target='blank'>GitHub Repo</a>
            {project.liveVersion && (
              <a href={project.live}>Live Version</a>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
    project: PropTypes.array.isRequired
}

export default ProjectCard;
