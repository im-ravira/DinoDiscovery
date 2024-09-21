import Navbar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Footer from "../components/Footer";

const QUIZ_QUESTIONS = [
  {
    Question: "Which dinosaur was known as the king of the dinosaurs?",
    Answers: [
      { Answer: "Triceratops", isCorrect: false },
      { Answer: "Tyrannosaurus Rex", isCorrect: true },
      { Answer: "Brachiosaurus", isCorrect: false },
      { Answer: "Velociraptor", isCorrect: false },
    ],
  },
  {
    Question: "Which dinosaur had three horns on its head?",
    Answers: [
      { Answer: "Triceratops", isCorrect: true },
      { Answer: "Stegosaurus", isCorrect: false },
      { Answer: "Ankylosaurus", isCorrect: false },
      { Answer: "Parasaurolophus", isCorrect: false },
    ],
  },
  {
    Question: "Which dinosaur had a long neck and could reach tall trees?",
    Answers: [
      { Answer: "Brachiosaurus", isCorrect: true },
      { Answer: "Allosaurus", isCorrect: false },
      { Answer: "Spinosaurus", isCorrect: false },
      { Answer: "Ankylosaurus", isCorrect: false },
    ],
  },
  {
    Question: "Which dinosaur had plates along its back?",
    Answers: [
      { Answer: "Stegosaurus", isCorrect: true },
      { Answer: "Tyrannosaurus Rex", isCorrect: false },
      { Answer: "Pachycephalosaurus", isCorrect: false },
      { Answer: "Velociraptor", isCorrect: false },
    ],
  },
  {
    Question: "Which dinosaur was known for its clubbed tail?",
    Answers: [
      { Answer: "Ankylosaurus", isCorrect: true },
      { Answer: "Velociraptor", isCorrect: false },
      { Answer: "Triceratops", isCorrect: false },
      { Answer: "Stegosaurus", isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      quizRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2, duration: 1 }
    );
  }, []);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <main className="bg-secondary bg-no-repeat bg-cover bg-fixed w-full flex items-center justify-center min-h-screen text-white relative">
      <Navbar />
      <section className="w-full grid place-content-center px-0 md:px-4">
        <div
          ref={quizRef}
          className="flex flex-col w-[20rem] md:w-[35rem] lg:w-[45rem] bg-green-800/20 rounded-3xl items-center justify-between bg-gradient-to-t from-[#3B5D2B]/40 to-[#2A4623]/30 border-[#d6ffc2] border-2 my-8"
        >
          <h3 className="p-2 md:p-2 text-2xl md:text-3xl text-[#dbffc5] border-[#d6ffc2] border-b-2 w-full font-Raleway font-semibold text-center md:px-6 ">
            Quiz Time
          </h3>
          {showScore ? (
            <div className="flex flex-col my-3 md:my-8 text-center ">
              <p className="text-xl md:text-2xl">
                You have scored {score} out of {QUIZ_QUESTIONS.length}
              </p>
              <button
                className="bg-[#3D5935] font-semibold px-24 py-2 rounded-md border-[1px] my-4 md:my-8 hover:bg-[#2A4623] duration-300"
                type="submit"
                onClick={resetQuiz}
              >
                Play Again!!
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl md:text-2xl text-[#d6ffc2] text-center md:py-6 f6ont-semibold tracking-wide py-4 px-1 md:px-4">
                {QUIZ_QUESTIONS[currentQuestion].Question}
              </h2>
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-10 px-10 gap-3 md:gap-y-10 w-full md:pb-10 py-4">
                {QUIZ_QUESTIONS[currentQuestion].Answers.map((answer) => (
                  <button
                  key={answer.Answer}
                    className="border-[#d6ffc2] border-2 rounded-full md:p-2 text-[#d6ffc2] font-semibold transform transition duration-500 hover:scale-105 hover:bg-[#d6ffc2] hover:text-black p-1"
                    onClick={() => handleAnswerResponse(answer.isCorrect)}
                  >
                    {answer.Answer}
                  </button>
                ))}
              </div>
              <div className="text-xl rounded-[15px] px-3 py-1 text-[#d6ffc2] mb-4 md:mb-6">
                <p id="p-number">
                  {currentQuestion + 1}
                  <span>/{QUIZ_QUESTIONS.length}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Quiz;
