import React from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  link: string;
  imgUrl: string;
}

const ProjectCard: React.FC<{ project: ProjectCardProps }> = ({ project }) => {
  return (
    <div
      className={`md:flex py-10 min-h-[350px] items-center bg-[#161513] p-10 my-4 ${
        project.id % 2 > 0 && "flex-row-reverse"
      } `}
    >
      <div className="flex-1 basis-1/2 h-full p-10">
        <h2 className="text-3xl mb-[60px] text-[#f0f2f5]">{project.title}</h2>

        <a
          href={project.link}
          target="_blank"
          className="px-4 py-1 rounded-full "
          style={{
            backgroundImage:
              "linear-gradient(to right, #b16cea, #ff5e69, #ff8a56, #ffa84b)",
          }}
        >
          Visit
        </a>
      </div>

      <div className="w-full basis-1/2">
        <img
          className="w-full h-full"
          src={project.imgUrl}
          alt="..."
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
