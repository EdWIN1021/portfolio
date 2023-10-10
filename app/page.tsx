import Banner from "./components/Banner";
import Educations from "./components/Educations";
import Header from "./components/Header";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Skills />
        <Educations />
      </main>
    </>
  );
}
