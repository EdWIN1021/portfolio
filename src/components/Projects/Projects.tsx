import Container from "../Container";
import Heading from "../Heading";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  link: string;
  imgUrl: string;
}

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://portfolio-3b344-default-rtdb.firebaseio.com/projects.json"
        );
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  console.log(projects);
  return (
    <Container bgColor="#1c1c22">
      <Heading title="Projects"></Heading>

      {!loading && (
        <div className="mt-[50px]">
          {projects.map((project: Project) => (
            <ProjectCard key={project?.id} project={project} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Projects;
