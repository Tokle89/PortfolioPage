import HeroSection from "../../components/HeroSection";
import StackSection from "../../components/StackSection";
import AboutMe from "../../components/About";

const HomePage = () => {
  return (
    <main className=" max-w-7xl w-full m-auto text-tertiary px-5 ">
      <HeroSection />
      <StackSection />
      <AboutMe />
    </main>
  );
};

export default HomePage;
