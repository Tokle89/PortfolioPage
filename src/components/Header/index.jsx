import Logo from "../Logo";
import Nav from "../Nav/Navigation";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MobileNav from "../Nav/MobileNav";
import { RiCloseLargeFill } from "react-icons/ri";
const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <header className="border-b flex items-center bg-black border-primary h-[100px] relative  ">
      <div className="max-w-7xl w-full text-primary px-5 flex justify-between m-auto items-center ">
        <Logo />
        <div className="hidden  md:block">
          <Nav />
        </div>
        <div className="block md:hidden " onClick={() => setShowMobileNav((prev) => !prev)}>
          {showMobileNav ? <RiCloseLargeFill className="text-6xl animated animate-duration-200 fadeIn" /> : <IoMenu className="text-7xl animate-duration-200  animated fadeOut" />}
        </div>
        {showMobileNav && <MobileNav />}
      </div>
    </header>
  );
};
export default Header;
