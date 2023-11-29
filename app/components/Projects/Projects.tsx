import Container from "@/app/ui/Container";
import Heading from "@/app/ui/Heading";
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    link: "https://temp-blue-seven.vercel.app/",
    imgUrl: "/netflix-preview.png",
  },
  {
    id: 2,
    title: "Library Management System",
    link: "https://library-management-system-teal.vercel.app/",
    imgUrl: "/lms-preview.png",
  },
  {
    id: 3,
    title: "Twitter Clone",
    link: "https://twitter-x-clone-kohl.vercel.app/",
    imgUrl: "/twitter-preview.png",
  },
];

const Projects = () => {
  return (
    <Container bgColor="#1c1c22">
      <Heading title="Projects"></Heading>

      <div className="mt-[50px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
