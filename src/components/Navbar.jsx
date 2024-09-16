import NavLogo from "../assets/dino-logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-[12vh] md:px-20 flex justify-between absolute top-0 px-6">
      <Link to="/"
        className="flex items-center hover:scale-105 transform transition duration-300"
      >
        <img className="md:w-8 mr-1 w-6" src={NavLogo} alt="dino-logo" />
        <p className="font-Berkshire text-white tracking-wide md:text-2xl text-lg">
          DinoDiscovery
        </p>
      </Link>
      <div className="flex items-center justify-between md:gap-8 md:font-semibold font-normal gap-2">
        <Link to="/" 
          className="text-shadow md:text-lg text-white transition duration-200 hover:text-[#78ff2a] text-sm"
        >
          Info
        </Link>
        <Link to="/"
          className="text-shadow md:text-lg text-white transition duration-200 hover:text-[#78ff2a] text-sm"
        >
          Fun Facts
        </Link>
        <Link to="/" 
          className="text-shadow md:text-lg text-white transition duration-300 hover:text-[#78ff2a] text-sm"
        >
          Quiz
        </Link>
      </div>
    </nav>
  );
}