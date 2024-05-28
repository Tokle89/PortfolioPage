import { ReactTyped } from "react-typed";
const HeroSection = () => {
  return (
    <section className="my-40 space-y-3 flex">
      <div>
        <p className="text-base md:text-2xl">Hello world! i am</p>
        <h1 className="text-5xl font-semibold text-primary">Fredrik Tokle</h1>
        <h2 className="text-5xl font-semibold text-white">
          <ReactTyped strings={["Front-End Devalop", " Front-End Developer"]} typeSpeed={40} backSpeed={20} />
        </h2>
      </div>
      <div>
        <img src={"/images/portfolio.jpg"} />
      </div>
    </section>
  );
};

export default HeroSection;
