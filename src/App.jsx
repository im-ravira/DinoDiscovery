import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dinosaurs from './pages/Dinosaurs';
import Story from './pages/Story';
import FunFacts from './pages/FunFacts';
import Quiz from './pages/Quiz';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dinosaurs" element={<Dinosaurs />} />
        <Route path="/story" element={<Story />} />
        <Route path="/FunFacts" element={<FunFacts />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
