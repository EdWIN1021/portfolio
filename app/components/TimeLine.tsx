"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = () => {
  return (
    <div className="bg-black p-10">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  red" }}
          date="2023/05 – 2023/07"
          iconStyle={{ background: "green", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Poros Career (Internship)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Frontend Developer
          </h4>

          <ul className="list-disc mt-2 px-2">
            <li>
              Implemented a library management system with React and NextJs.
            </li>
            <li>
              Integrated search functionality with third party APIs. Utilized
            </li>
            <li>
              next-auth to build an authentication system with Google and
              Github.
            </li>
            <li>Maintained data with MySQL and Prisma.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
