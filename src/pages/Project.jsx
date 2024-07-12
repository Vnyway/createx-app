import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../components/work-components/WorkExamplesSection";
import PageTopSection from "../components/general-components/PageTopSection";
import ProjectTopSection from "../components/project-components/ProjectTopSection";
import SelectedProjectsSection from "../components/general-components/SelectedProjectsSection";
import DiscussDetails from "../components/general-components/DiscussDetails";

const Project = () => {
  const { projectId } = useParams();
  const selectedProject = projects[projectId];
  const shownProjects = projects.filter((element) => element.id !== projectId);
  return (
    <main>
      <ProjectTopSection
        path={[
          { name: "Homepage", ref: "/" },
          { name: "Work", ref: "/work" },
          { name: selectedProject.heading },
        ]}
        heading={selectedProject.heading}
        image={selectedProject.image}
        goal={selectedProject.goal}
        details={selectedProject.details}
        decisions={selectedProject.desicions}
      />
      <SelectedProjectsSection
        heading="Similar projects"
        projects={shownProjects}
      />
      <DiscussDetails />
    </main>
  );
};

export default Project;
