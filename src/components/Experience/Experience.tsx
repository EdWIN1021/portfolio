import Timeline from "../Timeline/Timeline";
import Container from "../Container";
import Heading from "../Heading";

interface ExperienceProps {
  className?: string;
}

const Experience: React.FC<ExperienceProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Heading title="Experience" />
      <Timeline />
    </Container>
  );
};

export default Experience;
