"use client";

import Timeline from "./Timeline";
import Container from "../ui/Container";

const Experience = () => {
  return (
    <Container bgColor={"#161513"}>
      <h2 className="text-[2vw] font-bold" id="experience">
        <span className="gradient_text">Experience</span>
      </h2>

      <Timeline />
    </Container>
  );
};

export default Experience;
