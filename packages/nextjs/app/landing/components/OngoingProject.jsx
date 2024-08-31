// components/OngoingProjects.js
import ProjectCard from "./ProjectCard";

const OngoingProjects = ({ projects }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
