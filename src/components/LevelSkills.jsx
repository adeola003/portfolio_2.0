import React from 'react';
import '../styles/level.css';

const LevelSkills = ({ percentage, skill }) => {
  const strokeWidth = 10;
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="skill-bar">
      <svg width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#0078d4"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <p className="skill-name">
        {skill}
        <br />
        <span className="percentage">{percentage}%</span>
      </p>
    </div>
  );
};

export default LevelSkills;
