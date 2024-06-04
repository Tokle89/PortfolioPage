import HeroSection from "../../components/HeroSection";
import StackSection from "../../components/StackSection";
import AboutMe from "../../components/About";
import RenderPageHeadInfo from "../../hooks/usePageHeadHandler";

const HomePage = () => {
  RenderPageHeadInfo(" FT | Home", "Welcome to Fredrik Tokle's  Front-End developers portfolio website. Here you can find information about Fredrik Tokle and his work.");
  return (
    <main className=" max-w-7xl w-full m-auto text-tertiary px-5 ">
      <HeroSection />
      <StackSection />
      <AboutMe />
    </main>
  );
};

export default HomePage;
