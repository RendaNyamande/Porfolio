import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#458588]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix Clone"
            backgroundImg="/assets/projects/netflixClone.png"
            tech="HTML, CSS"
            projectUrl="https://github.com/RendaNyamande/Netflix-clone.git"
          />
          <ProjectItem
            title="Chat Application"
            backgroundImg="/assets/projects/chatApp1.png"
            tech="Java"
            projectUrl="https://github.com/RendaNyamande/Client-Server-Chat-Application.git"
          />
          <ProjectItem
            title="MovieAPI"
            backgroundImg="/assets/projects/MovieLand.png"
            tech="React"
            projectUrl="https://github.com/RendaNyamande/MovieLand.git"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
