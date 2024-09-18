import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const WorkSamples = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1c1c22", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  #1c1c22",
          }}
          date={"20XX-XX-XX"}
          iconStyle={{ background: "#1c1c22", color: "#fff" }}
        >
          <div>
            <div>
              <img src={"lms-preview.png"} alt="..." />
            </div>

            <h3 className="vertical-timeline-element-title text-xl gradient_text">
              {"Library Management System"}
            </h3>

            <p>
              The Library Management System (LMS) I developed is a robust web
              application designed to automate and optimize the daily operations
              of a library.
            </p>

            <Link
              className="gradient_text block mt-5"
              to={"/work-samples/library-management-system"}
            >
              Detail
            </Link>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1c1c22", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  #1c1c22",
          }}
          date={"20XX-XX-XX"}
          iconStyle={{ background: "#1c1c22", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl">
            {"Twitter Clone"}
          </h3>
          <div className="mt-8">
            <img
              className="w-full h-full"
              src={"twitter-preview.png"}
              alt="..."
            />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1c1c22", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  #1c1c22",
          }}
          date={"20XX-XX-XX"}
          iconStyle={{ background: "#1c1c22", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl">
            {"Real Time Chat"}
          </h3>
          <div className="mt-8">
            <img className="w-full h-full" src={"chat-preview.png"} alt="..." />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1c1c22", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  #1c1c22",
          }}
          date={"20XX-XX-XX"}
          iconStyle={{ background: "#1c1c22", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl">
            {"Game1"}
          </h3>
          <div className="mt-8">
            <img
              className="w-full h-full"
              src={"twitter-preview.png"}
              alt="..."
            />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1c1c22", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  #1c1c22",
          }}
          date={"20XX-XX-XX"}
          iconStyle={{ background: "#1c1c22", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl">
            {"Game2"}
          </h3>
          <div className="mt-8">
            <img
              className="w-full h-full"
              src={"twitter-preview.png"}
              alt="..."
            />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default WorkSamples;
