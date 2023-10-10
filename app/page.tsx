import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Educations from "./components/Educations";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";

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
