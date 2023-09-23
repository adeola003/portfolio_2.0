import React, { useState } from 'react';
import Modal from './Modal';

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
      <img className='project-main-img' src={project.screenshots[0]} alt={project.name} />
      <div className="project-details">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>Technologies: {project.techStack.join(', ')}</p>
        <button className='details-btn' onClick={openModal}>Details</button>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {/* Content for the modal */}
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className='modal-images'>
            {/* Display more screenshots */}
            {project.screenshots.map((screenshot, index) => (
              <a className='screen-link' href={screenshot} target='blank'><img className='modal-image' key={index} src={screenshot} alt={`Screenshot ${index + 1}`} /></a>
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

export default ProjectCard;