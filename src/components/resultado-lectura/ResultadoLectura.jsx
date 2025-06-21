import React from "react";
import "./ResultadoLectura.css";

function ResultadoLectura({ interpretation }) {
  if (!interpretation) return null;

  return (
    <div className="interpretacion-tarot-card">
      <div className="interpretacion-tarot-header">
        <span role="img" aria-label="estrella" className="interpretacion-tarot-icon">
          ✨
        </span>
        <h2>Interpretación</h2>
      </div>
      <div className="interpretacion-tarot-body">
        <p>{interpretation}</p>
      </div>
    </div>
  );
}

export default ResultadoLectura;