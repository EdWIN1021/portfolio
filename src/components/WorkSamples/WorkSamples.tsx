import { useNavigate } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Button } from "../ui/button";
const projects = [
  {
    id: 1,
    date: "2023/05",
    title: "Library Management System",
    imgSrc: "lms/preview.png",
    iconSrc: "next.png",
    description:
      "Developed a comprehensive Library Management System to manage library operations efficiently. The system includes features for user authentication, book transactions, inventory management, and fee processing.",
    to: "/work-samples/library-management-system",
  },
  {
    id: 2,
    date: "2024/01",
    title: "Twitter Clone",
    imgSrc: "tc/preview.png",
    iconSrc: "react.png",
    description:
      " This project is a full-stack web application that replicates the core functionalities of Twitter, including user authentication, posting tweets, following users, and real-time updates.",
    to: "/work-samples/twitter-clone",
  },
  {
    id: 3,
    date: "2019/11",
    title: "Real-time Chat Application",
    imgSrc: "rca/preview.png",
    iconSrc: "next.png",
    description:
      "My project focuses on developing a real-time chat application designed to enhance user interaction through instant messaging capabilities. This application aims to provide a seamless experience for users, whether for personal conversations or professional collaborations.",
    to: "/work-samples/real-time-chat-application",
  },
  {
    id: 4,
    date: "2024/07",
    title: "Shadow Knight",
    imgSrc: "sk/preview.png",
    iconSrc: "unreal.png",
    description:
      " Shadow Knight is a fast-paced 2D platformer where players navigate through dark, atmospheric levels filled with enemies. The game follows the journey of a shadow warrior who fights against evil creatures.",
    to: "/work-samples/shadow-knight",
  },
  {
    id: 5,
    date: "2024/08",
    title: "Legend of Wukong",
    imgSrc: "low/preview.png",
    iconSrc: "unreal.png",
    description:
      "This game is an action-packed RPG inspired by Journey to the West, a classical Chinese mythological tale. Players take on the role of a legendary warrior, embarking on a quest through mystical lands, battling demons and mythical creatures using fast-paced, skill-based combat mechanics.",
    to: "/work-samples/shadow-knight",
  },
];

const WorkSamples = () => {
  const navigate = useNavigate();

  return (
    <>
      <VerticalTimeline>
        {projects.map((project) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1c1c22", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  #1c1c22",
            }}
            date={project?.date}
            iconStyle={{
              background: "#1c1c22",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={
              <img className="w-12 h-12 rounded-full" src={project.iconSrc} />
            }
          >
            <div>
              <div>
                <img src={project?.imgSrc} alt="..." />
              </div>

              <h3 className="vertical-timeline-element-title text-xl gradient_text">
                {project?.title}
              </h3>

              <p>{project.description}</p>

              <Button
                className="mt-5"
                onClick={() => navigate(`${project?.to}`)}
              >
                read more
              </Button>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default WorkSamples;
