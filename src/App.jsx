import React, { useEffect, useState } from "react";
import CartaTarot from "./components/CartaTarot";
import { obtenerCartas } from "./services/tarotService";
import "./App.css";

function App() {
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerCartas()
      .then(data => {
        setCartas(data.cards);
        setIntention(data.intention || "");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="centro-pantalla">Cargando cartas...</div>;

  return (
    <div className="centro-pantalla">
      <div className="fila-cartas">
        {cartas.map((carta, idx) => (
          <CartaTarot
            key={idx}
            nombre={carta.name }
            pinta={carta.suit}
            imagen="https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg"
            reversed={carta.is_reversed}
          />
        ))}
      </div>
    </div>
  );
}

export default App;