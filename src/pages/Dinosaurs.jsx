import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dinosaurs = () => {
  const cardInfo = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const q2 = gsap.utils.selector(cardInfo);
  const [dinosaurData, setDinosaurData] = useState([]);

  useEffect(() => {
    const fetchDinosaurData = async () => {
      try {
        const response = await fetch('/dinosaurs.json');
        const data = await response.json();
        setDinosaurData(data);
      } catch (error) {
        console.error('Error fetching dinosaur data:', error);
      }
    };

    fetchDinosaurData();
  }, []);

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
    <section className="w-full mx-3 md:mx-10 mt-28 md:mt-36 lg:mt-28">
      <h1 className="text-xl md:text-4xl lg:text-5xl text-center font-bold mb-24">Meet the Different Dinosaurs</h1>
      <div ref={cardInfo} className="md:space-y-12 space-y-8 my-8">
        {dinosaurData.map((dino, index) => (
          <div key={index} id='card'  className="relative flex flex-col lg:flex-row bg-[#00000070] rounded-xl items-center justify-center py-12 md:px-6 lg:px-8 ">
            <img src={dino.image} alt={dino.name} id={`dino-image-${index}`} className="w-[80%] md:w-3/4 lg:w-1/3 h-auto object-cover mb-4 md:mb-10 lg:mb-0 mr-10 md:mr-8 lg:mr-4" />
            <button
                  onClick={() => handleAudioPlay(dino.audio, `#dino-image-${index}`)}
                  className=" absolute hidden md:block md:top-11 max-lg:right-12 lg:left-[22rem] bg-gray-400/20 text-black rounded-full md:p-2 hover:bg-gray-950"
                >🔊</button>
            <div className="flex-1 mx-4 lg:ml-12">
              <div className='flex flex-row items-center justify-between mb-1'><h2 className="text-lg md:text-3xl font-Raleway font-semibold mb-2 md:mb-4">{dino.name}</h2>
              <button
                  onClick={() => handleAudioPlay(dino.audio, `#dino-image-${index}`)}
                  className="mb-2 mr-2 bg-gray-400/20 text-black text-sm rounded-full p-1 hover:bg-gray-950 block md:hidden"
                >🔊</button></div>
              <p className='leading-relaxed text-sm md:text-lg font-light text-pretty text-justify'>{dino.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </main>
  );
};

export default Dinosaurs;
