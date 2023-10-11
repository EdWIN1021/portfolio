import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Educations from "./components/Education/Educations";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Skills />
        <Experience />
        <Educations />
        <Contact />
      </main>
    </>
  );
}
