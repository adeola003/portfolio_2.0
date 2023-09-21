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
      <img src={project.screenshot} alt={project.name} />
      <div className="project-details">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>Technologies: {project.techStack.join(', ')}</p>
        <button onClick={openModal}>Details</button>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {/* Content for the modal */}
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div>
            {/* Display more screenshots */}
            {project.moreScreenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
            ))}
          </div>
          <div>
            {/* Links to GitHub and live version */}
            <a href={project.githubRepo}>GitHub Repo</a>
            {project.liveVersion && (
              <a href={project.liveVersion}>Live Version</a>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectCard;
