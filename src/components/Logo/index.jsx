import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/">
    <div className="block  border-2 border-primary  text-center w-[60px] h-[60px] transition-all duration-100 hover:border-8 flex justify-center items-center ">
      <p className="font-bold text-2xl ">FT</p>
    </div>
  </Link>
);
export default Logo;
