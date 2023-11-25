import EducationCard from "./EducationCard";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";

const Educations = () => {
  return (
    <Container bgColor="#161513">
      <Heading title={"Education"} />

      <div className=" h-full text-center items-center flex flex-col md:flex-row md:justify-between md:items-center md:text-left">
        <EducationCard />
        <img
          className="w-[400px] h-[200px] mt-8"
          src="https://algomau.ca/wp-content/uploads/2018/11/6.3-Our-Campuses-Overview-SSM-Header-1.jpg"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Educations;
