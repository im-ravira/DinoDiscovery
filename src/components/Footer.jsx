import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full absolute bottom-0 py-4">
        <div className="mt-6 text-center">
          <p className="text-sm md:text-base text-white">Website created by <span className="hover:text-lime-300 font-normal underline underline-offset-2"><Link to="https://www.linkedin.com/in/imravira/" target="_blank">Ravikumar</Link></span></p>
        </div>
    </footer>
  );
}
