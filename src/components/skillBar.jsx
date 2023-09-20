import React from 'react';
import PropTypes from 'prop-types';
import '../styles/skillbar.css';

const SkillBar = ({ skillName, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="progress">
        <div className="fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="skill-info">
        <span className="skill-name">{skillName}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  skillName: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SkillBar;
