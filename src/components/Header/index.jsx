import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="border-b flex items-center bg-black border-primary h-[100px]  ">
      <div className="max-w-7xl text-primary ">
        <Link to="/">
          <div className="block  border-2 border-primary  text-center w-[60px] h-[60px] transition-all duration-100 hover:border-8 flex justify-center items-center ">
            <p className="font-bold text-2xl ">FT</p>
          </div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
