import Banner from "./components/Banner/Banner";
import Educations from "./components/Eductions/Educations";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";

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
