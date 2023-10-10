import Banner from "./components/Banner";
import Educations from "./components/Educations";
import Experience from "./components/Experience";
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
      </main>
    </>
  );
}
