import { NavLink } from "react-router-dom";
import Logo from "../../Logo";

const MobileNav = ({ setShowMobileNav }) => {
  return (
    <div className="fixed top-[100px]  bg-black right-0 border border-primary rounded-b px-5 py-10 min-w-80 animate-fade-left animate-duration-200 ">
      <Logo />
      <nav>
        <ul className="flex flex-col text-2xl gap-7 mt-10">
          <li className="hover:bg-gray-700 py-3">
            <NavLink className={({ isActive }) => (isActive ? `text-white border-b border-white` : undefined)} to="/" onClick={() => setShowMobileNav(false)}>
              Home
            </NavLink>
          </li>
          <li className="hover:bg-gray-700 py-3">
            <NavLink className={({ isActive }) => (isActive ? `text-white border-b border-white` : undefined)} to="/portfolio" onClick={() => setShowMobileNav(false)}>
              Portfolio
            </NavLink>
          </li>
          <li className="hover:bg-gray-700 py-3">
            <NavLink className={({ isActive }) => (isActive ? `text-white border-b border-white` : undefined)} to="/contact" onClick={() => setShowMobileNav(false)}>
              Let`s talk
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
