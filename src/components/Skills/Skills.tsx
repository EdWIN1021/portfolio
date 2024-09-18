import SkillCard from "./SkillCard";
import Container from "../Container";
import Heading from "../Heading";
import { skills } from "./constants";
import { motion } from "framer-motion";

interface SkillsProps {
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
  return (
    <Container className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        exit={{ opacity: 1 }}
      >
        <Heading title={"Skills"} />
        <div className="grid md:grid-cols-6  grid-cols-4 gap-y-8 mt-10">
          {skills.map((skill) => (
            <SkillCard key={skill} imgUrl={`${skill}.png`} title={skill} />
          ))}
        </div>
      </motion.div>
    </Container>
  );
};

export default Skills;
