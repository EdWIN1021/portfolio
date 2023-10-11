import TimelineCard from "./TimelineCard";
import { experience } from "./constants";

const Timeline = () => {
  return (
    <div className="md:flex flex-col relative items-center mt-10">
      <div className="hidden lg:block w-[3px] h-full bg-white absolute"></div>
      {experience.map((item, index) => (
        <TimelineCard
          position={index % 2 === 0 ? "self-start" : "self-end"}
          key={item.company}
          company={item.company}
          title={item.title}
          duration={item.duration}
          details={item.details}
          skills={item.skills}
        />
      ))}
    </div>
  );
};

export default Timeline;
