import React, { useState } from "react";
import "./CartaTarot.css";

const DORSO_IMG = "https://decartascoleccionables.com/wp-content/uploads/2021/01/dorso-carta-pokemon-725x1024.jpg";

function CartaTarot({ nombre, imagen, reversed, pinta }) {
  const [revelada, setRevelada] = useState(false);
  const handleClick = () => setRevelada(!revelada);

  return (
    <div 
      className={`carta-tarot${revelada ? " revelada" : ""}`}
      onClick={handleClick}
    >
      <div className="carta-tarot-inner">
        <img 
          src={DORSO_IMG}
          alt="Dorso"
          className="carta-tarot-img"
        />
        <img 
          src={imagen}
          alt={nombre + " " + pinta + (reversed ? " invertida" : " al derecho")}
          className={`carta-tarot-img carta-tarot-img-back${reversed ? " reversed" : ""}`}

        />
      </div>
    </div>
  );
}

export default CartaTarot;