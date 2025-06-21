import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MesaTarot from "./components/mesa-tarot/MesaTarot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mesa-tarot" element={<MesaTarot />} />
      </Routes>
    </Router>
  );
}

export default App;