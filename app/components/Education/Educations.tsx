import EducationCard from "./EducationCard";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import Image from "next/image";

const Educations = () => {
  return (
    <Container bgColor="#161513">
      <Heading title={"Education"} />

      <div className=" h-full text-center items-center flex flex-col md:flex-row md:justify-between md:items-center md:text-left">
        <EducationCard />
        <Image
          className="mt-8 md:mt-8"
          src="https://algomau.ca/wp-content/uploads/2018/11/6.3-Our-Campuses-Overview-SSM-Header-1.jpg"
          alt=""
          width={500}
          height={300}
        />
      </div>
    </Container>
  );
};

export default Educations;
