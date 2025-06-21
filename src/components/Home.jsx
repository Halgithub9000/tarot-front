import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="centro-pantalla">
      <button onClick={() => navigate("/mesa-tarot")}>Ir a la mesa de tarot</button>
    </div>
  );
}
export default Home;