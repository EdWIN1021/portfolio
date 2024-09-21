import ProjectDetails from "@/components/ProjectDetails";
import { useDetails } from "@/hooks/useDetails";
import { useParams } from "react-router-dom";

const Project = () => {
  const params = useParams();
  const { details } = useDetails(params?.projectId || "");
  return <ProjectDetails details={details} />;
};

export default Project;
