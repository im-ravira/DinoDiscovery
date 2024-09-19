import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import DinoIcon from "../assets/dinosaur-pixel.svg";
import Footer from "../components/Footer";

const Home = () => {
  const welcome = useRef(null);
  const DinoWorld = useRef(null);
  const paragraph = useRef(null);

  useEffect(() => {
    gsap.to(welcome.current, {
      x: 0,
      opacity: 1,
      delay: 0,
      duration: 1,
    });

    gsap.to(DinoWorld.current, {
      x: 0,
      opacity: 1,
      delay: 0.1,
      duration: 1,
    });

    gsap.to(paragraph.current, {
      x: 0,
      opacity: 1,
      delay: 0.3,
      duration: 1,
    });
  });

  return (
    <main className="w-full flex items-center justify-center min-h-screen text-white relative overflow-hidden">
      <div className="moveBackground absolute w-full h-full bg-no-repeat bg-primary bg-cover -z-10"></div>
      <Navbar />
      <section className="md:w-[80vw] w-[100vw] h-full">
        <div className="flex flex-col items-center justify-between">
          <div className="text-center drop-shadow-lg">
            <h3
              className="font-semibold opacity-0 -translate-x-20 text-3xl md:text-6xl"
              ref={welcome}
            >
              Welcome to
            </h3>
            <h1
              className="bg-gradient-to-b from-[#83ff30] to-[#cc6300] bg-clip-text font-bold text-transparent -translate-x-20 opacity-0 text-5xl md:text-7xl md:bg-red-400"
              ref={DinoWorld}
            >
              Dinosaur World
            </h1>
          </div>
          <p
            className="mt-4 text-base lg:text-lg text-white font-light text-center w-11/12 lg:w-2/4 opacity-0 -translate-x-20"
            ref={paragraph}
          >
            Welcome to the world of Dinosaurs! Discover different types of dinosaurs, learn fun facts, and play a mini-quiz game!
          </p>
        </div>
        <div className="flex items-center justify-center relative mt-14">
          <Link
            to="/dinosaurs"
            className="btn btn-animated text-base font-medium"
          >
            <button className="flex flex-row items-center justify-center gap-2 font-Berkshire text-xl"><img className="size-10 relative" src={DinoIcon} alt="" />Discover Dino's</button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
