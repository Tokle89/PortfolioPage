import { ReactTyped } from "react-typed";
import CustomButton from "../Button";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="my-40  flex  flex-col-reverse lg:flex-row items-center  gap-20">
      <div className=" md:min-w-[504px] space-y-3 ">
        <p className="text-base md:text-2xl">Hello world! i am</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-primary">Fredrik Tokle</h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-white">
          <ReactTyped strings={["Front-End Devalop", " Front-End Developer"]} typeSpeed={40} backSpeed={30} />
        </h2>
        <div className="pt-5 flex gap-10">
          <Link to="/contact">
            <CustomButton className={"bg-secondary border-secondary text-black hover:bg-black hover:text-secondary"}>Contact</CustomButton>
          </Link>

          <Link to="/about">
            <CustomButton className={"bg-black border-secondary text-secondary hover:bg-secondary hover:text-black"}>Portfolio</CustomButton>
          </Link>
        </div>
      </div>
      <div className="border-4 border-primary rounded-full">
        <div className="rounded-full border-8 border-black">
          <img src={"/images/portfolio.JPG"} alt="Fredrik Tokle" className=" rounded-full w-[200px] h-[200px] md:w-[280px] md:h-[280px] object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;