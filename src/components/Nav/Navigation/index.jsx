import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul className="text-primary text-xl w-96 flex justify-between">
      <NavLink className={({ isActive }) => (isActive ? `text-white border-b border-white` : undefined)} to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? `text-white border-b border-white` : undefined)} to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? `text-white border-b border-white` : undefined)} to="/contact">
        Let`s talk
      </NavLink>
    </ul>
  </nav>
);

export default Nav;
