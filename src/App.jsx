import React from "react";
import { MantelTarot } from "./components/MantelTarot";
import { CartaTarot } from "./components/CartaTarot";

const cartas = [
  {
    nombre: "El Mago",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_01_Magician.jpg",
  },
  {
    nombre: "La Luna",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
  },
  {
    nombre: "El Sol",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
  },
  {
    nombre: "La Estrella",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
  },
  {
    nombre: "El Juicio",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_20_Judgement.jpg",
  },
];

export default function App() {
  return (
    <main style={{
      padding: "3vw",
      minHeight: "100vh",
      background: "#f7f5ef",
      maxWidth: 2000,
      margin: "0 auto",
      boxSizing: "border-box"
    }}>
      <h2 style={{ textAlign: "center", margin: "32px 0 48px", fontSize: "2.3rem" }}>
        Tirada de Tarot
      </h2>
      <MantelTarot>
        {cartas.map((carta, idx) => (
          <CartaTarot
            key={idx}
            imagen={carta.imagen}
            nombre={carta.nombre}
          />
        ))}
      </MantelTarot>
    </main>
  );
}