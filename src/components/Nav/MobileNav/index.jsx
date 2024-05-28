import { NavLink } from "react-router-dom";
import Logo from "../../Logo";

const MobileNav = () => {
  return (
    <div className="fixed top-[100px] right-0 border border-primary rounded-b px-5 py-10 min-w-80 animate-fade-left animate-duration-200 ">
      <Logo />
      <nav>
        <ul className="flex flex-col text-3xl gap-7 mt-10">
          <li className="hover:bg-gray-700 py-3">
            <NavLink className={({ isActive }) => isActive && `text-white border-b border-white`} to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:bg-gray-700 py-3">
            <NavLink className={({ isActive }) => isActive && `text-white border-b border-white`} to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="hover:bg-gray-700 py-3">
            <NavLink className={({ isActive }) => isActive && `text-white border-b border-white`} to="/contact">
              Let`s talk
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
