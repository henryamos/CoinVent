// components/ProjectCard.js
"use client";

import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Link href='/donation'>
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-black">{project.title}</h3>
          <span className="text-sm bg-green-800 text-white py-1 px-3 rounded-full">{project.status}</span>
        </div>
        <p className="text-black text-sm mb-4">
          {project.description}
        </p>
        <div className="text-sm  text-black">
          <div className="mb-2">
            <span className="font-semibold text-blue-700">Total raised: </span>${project.totalRaised.toLocaleString()}
          </div>
          <div className="mb-2">
  <span className="font-semibold text-blue-700">Fundraising goal: </span>
  {project.fundraisingGoal ? `$${project.fundraisingGoal.toLocaleString()}` : 'N/A'}
</div>
          <div className="mb-2">
            <span className="font-semibold text-blue-700">Starting date: </span>{project.startingDate}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProjectCard;
