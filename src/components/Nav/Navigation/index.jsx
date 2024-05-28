import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul className="text-primary text-2xl w-96 flex justify-between">
      <NavLink className={({ isActive }) => isActive && `text-white border-b border-white`} to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive }) => isActive && `text-white border-b border-white`} to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className={({ isActive }) => isActive && `text-white border-b border-white`} to="/contact">
        Let`s talk
      </NavLink>
    </ul>
  </nav>
);

export default Nav;