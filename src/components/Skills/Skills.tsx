import SkillCard from "./SkillCard";
import Container from "../Container";
import Heading from "../Heading";
import { skills } from "./constants";

const Skills = () => {
  return (
    <Container bgColor="#1c1c22">
      <Heading title={"Skills"} />
      <div className="grid md:grid-cols-6  grid-cols-4 gap-y-8 mt-10">
        {skills.map((skill) => (
          <SkillCard key={skill} imgUrl={`${skill}.png`} title={skill} />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
