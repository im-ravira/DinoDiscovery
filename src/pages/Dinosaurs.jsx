// Dinosaurs.jsx
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import dinosaurData from '../data/dinosaurs.json'; 
import Navbar from '../components/Navbar';

const Dinosaurs = () => {
  const cardInfo = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const q2 = gsap.utils.selector(cardInfo);

  useEffect(() => {
    gsap.to(q2(".card"), {
      y: -50,
      opacity: 1,
      stagger: 0.7,
      duration: 0.9,
    });
  }, [q2]);

  const handleMouseEnter = (audioSrc) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const newAudio = new Audio(audioSrc);
    newAudio.play();
    setCurrentAudio(newAudio);
  };

  return (
    <main className="w-full flex bg-secondary bg-no-repeat bg-cover bg-fixed justify-center min-h-screen text-white relative ">
    <Navbar />
    <section className="w-full mx-10 mt-24">
      <h1 className="text-5xl text-center font-bold mb-24">Meet the Different Dinosaurs</h1>
      <div ref={cardInfo} className="space-y-12">
        {dinosaurData.map((dino, index) => (
          <div key={index}  className="card flex flex-col md:flex-row bg-[#00000070] rounded-lg items-center justify-center py-12 px-8">
            <img src={dino.image} alt={dino.name} onMouseEnter={() => handleMouseEnter(dino.audio)} className="shake w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0 md:mr-4" />
            <div className="flex-1 ml-12">
              <h2 className="text-3xl font-Raleway font-semibold mb-4">{dino.name}</h2>
              <p className='leading-relaxed text-lg font-light text-justify'>{dino.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
};

export default Dinosaurs;
