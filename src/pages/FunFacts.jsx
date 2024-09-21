import Navbar from "../components/Navbar";
import FunFacts1 from "../components/FunFacts1.component";
import FunFacts2 from "../components/FunFacts2.component";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Footer from "../components/Footer";
import DinoFactImg from "../assets/dinofact.png";

const FunFacts = () => {
    const main = useRef(null);
    const q = gsap.utils.selector(main);

    useEffect(() => {
        gsap.to(q('#img'), {
            x: 0,
            opacity: 1,
            stagger: .1,
            duration: 1
        });

        gsap.to(q('.facts'), {
            x: 0,
            opacity: 1,
            delay: .3,
            duration: 1
        });

        gsap.to(q('.links'), {
            x: 0,
            opacity: 1,
            delay: .4,
            duration: 1
        });
    }, [q]);

    return (
        <main className="w-full flex-col flex bg-fixed bg-secondary bg-no-repeat bg-cover items-center justify-center min-h-screen text-white relative overflow-hidden" ref={main}>
            <Navbar />
            <section className="mt-24 mb-16 max-sm:flex flex-col items-center">
                <div id="img" className="md:hidden flex items-center justify-center">
                    <img className="w-[80%] mr-4" src={DinoFactImg} alt="" />
                </div>
                <a href="https://www.nhm.ac.uk/discover/dino-directory/" target="blank" className="mblock md:hidden underline text-white links opacity-0 -translate-x-24">Know More</a>
            <FunFacts1 facts="Dinosaurs lived millions of years ago." />
            <FunFacts2 facts="Some dinosaurs were as small as chickens!" />
            <FunFacts1 facts="The T. Rex had the strongest bite of any land animal." />
            <FunFacts2 facts="Dinosaurs laid eggs like birds do today." />
            <FunFacts1 facts="Some dinosaurs had feathers." />
            <FunFacts2 facts="Argentinosaurus was as heavy as 15 elephants!" />
            <FunFacts1 facts="Birds are the closest living relatives to dinosaurs." />
            <FunFacts2 facts="Velociraptors were only the size of turkeys." />
            <FunFacts1 facts="Stegosaurus had a brain the size of a walnut." />
            <FunFacts2 facts="Dinosaurs once lived on every continent, including Antarctica!" />
            </section>
            <Footer />
        </main>
    );
}

export default FunFacts;
