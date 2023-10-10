import SkillCard from "./SkillCard";

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
    <section className="bg-[#1c1c22] px-40 py-20 h-[594px]">
      <h2 className="text-[2vw] font-bold" id="skills">
        <span className="gradient_text">Skills/Techniques</span>
      </h2>

      <div className="grid grid-cols-6 gap-y-8 mt-10">
        {skills.map((skill) => (
          <SkillCard key={skill} imgUrl={`/${skill}.png`} title={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
