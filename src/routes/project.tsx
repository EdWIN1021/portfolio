import ProjectDetails from "@/components/ProjectDetails";
import { useDetails } from "@/hooks/useDetails";
import { useParams } from "react-router-dom";

import { animateScroll as scroll } from "react-scroll";

const Project = () => {
  const params = useParams();
  const { details } = useDetails(params?.projectId || "");
  return (
    <>
      <ProjectDetails details={details} />

      <div
        className="fixed right-20 bottom-20 border-2 p-1 rounded-full cursor-pointer"
        onClick={() => scroll.scrollToTop()}
      >
        <img className="bg-black" src={"top.png"} width={25} height={25} />
      </div>
    </>
  );
};

export default Project;
