import EducationCard from "./EducationCard";
import Container from "../Container";
import Heading from "../Heading";

interface EducationsProps {
  className?: string;
}

const Educations: React.FC<EducationsProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Heading title={"Education"} />
      <div className="text-center md:text-left md:flex">
        <EducationCard />

        <div className="basis-1/2">
          <img
            src="https://algomau.ca/wp-content/uploads/2018/11/6.3-Our-Campuses-Overview-SSM-Header-1.jpg"
            alt="..."
            className="w-full h-full"
          />
        </div>
      </div>
    </Container>
  );
};

export default Educations;
