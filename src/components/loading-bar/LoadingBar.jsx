import React from "react";
import "./LoadingBar.css";
import imagenCargando from "../../assets/la-sacerdotisa.jpeg"; // Asegúrate de que la ruta sea correcta

function LoadingBar() {
  return (
    <div className="loading-bar-overlay">
      <img src={imagenCargando} alt="Cargando..." className="loading-bar-card" />
    </div>
  );
}

export default LoadingBar;