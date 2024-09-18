import Banner from "../components/Banner";
import Contact from "../components/Contact/Contact";
import Educations from "../components/Education/Educations";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const Resume = () => {
  return (
    <div>
      <Banner className="bg-[#161513]" />
      <Skills className="bg-[#1c1c22]" />
      <Experience className="bg-[#161513]" />
      <Projects className="bg-[#1c1c22]" />
      <Educations className="bg-[#161513]" />
      <Contact className="bg-[#1c1c22]" />
    </div>
  );
};

export default Resume;
