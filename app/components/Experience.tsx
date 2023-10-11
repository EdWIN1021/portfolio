"use client";

import Timeline from "./Timeline";

const Experience = () => {
  return (
    <section className="bg-[#161513]">
      <div className="mx-auto p-20 w-[1080px]">
        <h2 className="text-[2vw] font-bold" id="experience">
          <span className="gradient_text">Experience</span>
        </h2>

        <Timeline />
      </div>
    </section>
  );
};

export default Experience;
