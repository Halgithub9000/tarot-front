import React, { useState } from "react";
import CartaTarot from "./components/CartaTarot";
import { obtenerCartas } from "./services/tarotService";
import "./App.css";

function App() {
  const [cartas, setCartas] = useState([]);
  const [intention, setIntention] = useState("");
  const [loading, setLoading] = useState(false);
  const [tiradaMostrada, setTiradaMostrada] = useState(false);

  const handleTirada = async () => {
    setLoading(true);
    try {
      const data = await obtenerCartas();
      setCartas(data.cards || []);
      setIntention(data.intention || "");
      setTiradaMostrada(true);
    } catch {
      setLoading(true);
      alert("Error al obtener las cartas. Por favor, intenta de nuevo más tarde.");
    }
    setLoading(false);
  };

  if (loading) return <div className="centro-pantalla">Cargando cartas...</div>;

  return (
    <div className="centro-pantalla">
      {!tiradaMostrada ? (
        <button onClick={handleTirada}>Mi Tirada Diaria</button>
      ) : (
        <div>
          <div className="fila-cartas">
            {Array.isArray(cartas) && cartas.map((carta, idx) => (
              <CartaTarot
                key={idx}
                nombre={carta.name}
                imagen={"https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg"}
                reversed={carta.is_reversed}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;