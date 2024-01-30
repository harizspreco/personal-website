'use client'

import { useState } from 'react';

const ProjectCard = ({ title, imageUrl, description, projectLink }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  const handleCloseClick = () => {
    setExpanded(false);
  };

  const truncatedDescription = description.slice(0, 100);

  return (
    <div
      className={`relative cursor-pointer transition-transform transform hover:scale-105 ${
        expanded ? 'z-50' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className="bg-opacity-10 bg-gray-300 p-4 rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-50">
        {expanded ? description : truncatedDescription}
        </p>
      </div>

      {expanded && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-8 max-w-2xl rounded-lg shadow-lg overflow-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleCloseClick}
            >
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">{title}</h3>
            <img src={imageUrl} alt={title} className="w-full h-64 object-cover mb-4" />
            <p className="text-gray-700 mb-4">{description}</p>
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
