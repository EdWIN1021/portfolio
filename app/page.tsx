import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Educations from "./components/Education/Educations";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Skills />
        <Experience />
        <Projects />
        <Educations />
        <Contact />
      </main>
    </>
  );
}
