import React from "react";
import CartaTarot from "./components/CartaTarot";
import "./App.css";

const cartas = [
  { nombre: "La Luna", imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg" },
  { nombre: "La Luna", imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg" },
  { nombre: "La Luna", imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg" },
  { nombre: "La Luna", imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg" },
  { nombre: "La Luna", imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg" },
];

function App() {
  return (
    <div className="centro-pantalla">
      <div className="fila-cartas">
        {cartas.map((carta, idx) => (
          <CartaTarot key={idx} nombre={carta.nombre} imagen={carta.imagen} reversed={true}/>
        ))}
      </div>
    </div>
  );
}

export default App;