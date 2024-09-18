import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import dinosaurData from '../data/dinosaurs.json'; 
import Navbar from '../components/Navbar';

const Dinosaurs = () => {
  const cardInfo = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const q2 = gsap.utils.selector(cardInfo);

  useEffect(() => {
    gsap.to(q2("#card"), {
      y: -50,
      opacity: 1,
      stagger: 0,
      duration: 1,
    });
  }, [q2]);

  const handleAudioPlay = (audioSrc, imageRef) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const newAudio = new Audio(audioSrc);
    newAudio.play();
    setCurrentAudio(newAudio);
    gsap.fromTo(imageRef, { x: 0, y:0, z: 0, }, { x: 16, y: -16, z: -8, yoyo: true, repeat: 2, duration: 0.2 });
  };

  return (
    <main className="w-full flex bg-secondary bg-no-repeat bg-cover bg-fixed justify-center min-h-screen text-white relative ">
    <Navbar />
    <section className="w-full mx-10 mt-28">
      <h1 className="text-5xl text-center font-bold mb-24">Meet the Different Dinosaurs</h1>
      <div ref={cardInfo} className="space-y-12">
        {dinosaurData.map((dino, index) => (
          <div key={index} id='card'  className="relative flex flex-col md:flex-row bg-[#00000070] rounded-lg items-center justify-center py-12 px-8 ">
            <img src={dino.image} alt={dino.name} id={`dino-image-${index}`} className="w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0 md:mr-4" />
            <button
                  onClick={() => handleAudioPlay(dino.audio, `#dino-image-${index}`)}
                  className=" absolute top-11 left-96 bg-gray-400/20 text-black rounded-full p-3 hover:bg-gray-950"
                >🔊</button>
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
