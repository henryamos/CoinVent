// components/FundedProjects.js
import ProjectCard from "./ProjectCard";

const FutureProject = ({ projects }) => {
  return (
    <section className="py-12 bg-[#011B32]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-white">Funded Projects</h2>
          <a href="#" className="text-white hover:underline">View More</a>
        </div>
        <p className="text-white mb-6">List of ongoing projects to invest in</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureProject;
