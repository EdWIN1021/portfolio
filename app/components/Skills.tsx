import SkillCard from "./SkillCard";
import Container from "../ui/Container";

const skills = [
  "javascript",
  "typescript",
  "react",
  "next",
  "node",
  "express",
  "css",
  "sass",
  "tailwindcss",
  "mui",
  "antd",
  "bootstrap",
  "mysql",
  "mongodb",
  "firebase",
  "docker",
  "git",
  "npm",
];

const Skills = () => {
  return (
    <Container bgColor="#1c1c22">
      <h2
        className="text-[32px] font-bold text-center md:text-left"
        id="skills"
      >
        <span className="gradient_text">Skills/Techniques</span>
      </h2>

      <div className="grid md:grid-cols-6  grid-cols-4 gap-y-8 mt-10">
        {skills.map((skill) => (
          <SkillCard key={skill} imgUrl={`/${skill}.png`} title={skill} />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
