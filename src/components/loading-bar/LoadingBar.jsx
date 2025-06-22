import React from "react";
import "./LoadingBar.css";
import CartaTarot from "../carta-tarot/CartaTarot";
import imagenCargando from "../../assets/la-sacerdotisa.jpeg"; // o la imagen que prefieras

function LoadingBar() {
  return (
    <div className="loading-bar-overlay">
      <div className="loading-bar-carta-animada">
        <CartaTarot
          nombre="La Sacerdotisa"
          imagen={imagenCargando}
          reversed={false}
          revelada={true}
        />
      </div>
    </div>
  );
}

export default LoadingBar;