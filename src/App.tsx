import Banner from "./components/Banner";
import Contact from "./components/Contact/Contact";
import Educations from "./components/Education/Educations";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Educations />
      <Contact />
    </main>
  );
}

export default App;
