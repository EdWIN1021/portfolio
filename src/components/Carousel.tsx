import Marquee from "react-fast-marquee";
import Heading from "./Heading";

const skills_set1 = [
  "javascript",
  "typescript",
  "c++",
  "csharp",
  "java",
  "react",
  "next",
  "css",
  "sass",
  "tailwindcss",
  "mui",
  "antd",
  "bootstrap",
];

const skills_set2 = [
  "node",
  "express",
  "mysql",
  "mongodb",
  "firebase",
  "docker",
  "git",
  "npm",
];

const Carousel = () => {
  return (
    <>
      <div className="flex flex-col gap-[5vw]">
        <Heading title={"Skills"} />
        <Marquee direction="right" pauseOnHover speed={20} autoFill>
          {skills_set1.map((logo) => (
            <img
              key={logo}
              className="m-10 w-[15vw] md:w-[8vw]"
              src={`${logo}.png`}
              alt=""
            />
          ))}
        </Marquee>

        <Marquee direction="left" pauseOnHover speed={20} autoFill>
          {skills_set2.map((logo) => (
            <img
              key={logo}
              className="m-10 w-[15vw] md:w-[8vw]"
              src={`${logo}.png`}
              alt=""
            />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Carousel;
