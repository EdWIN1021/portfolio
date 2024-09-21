import ProjectDetail from "./ProjectDetail";
import SampleBreadcrumb from "./SampleBreadcrumb";
import TableOfContent from "./TableOfContent";

interface ProjectDetailsProps {
  details: Detail[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ details }) => {
  return (
    <>
      <TableOfContent details={details} />
      <div className="max-w-[800px] mx-auto">
        <SampleBreadcrumb />

        <div className="gap-20 mt-10 space-y-20">
          {details?.map((detail) => (
            <ProjectDetail key={detail?.title} detail={detail} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
