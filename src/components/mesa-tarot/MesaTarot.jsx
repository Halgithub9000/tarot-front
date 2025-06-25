import React, { useState } from "react";
import "./MesaTarot.css";
import { interpretInDetail, interpretSuperficially } from "../../services/OracleService";
import CartaTarot from "../carta-tarot/CartaTarot";
import ResultadoLectura from "../resultado-lectura/ResultadoLectura";
import LoadingBar from "../loading-bar/LoadingBar";

import { obtenerCartas } from "../../services/tarotService";


const OPCIONES_INTENCION = [
  { value: "", label: "Manifiesta tu intención ...", selected: true },
  { value: "general", label: "General" },
  { value: "amor", label: "Amor" },
  { value: "trabajo", label: "Trabajo" },
  { value: "salud", label: "Salud" },
  { value: "proyectos", label: "Nuevos Proyectos" },
  // Agrega más opciones si lo deseas
];

function MesaTarot() {
  const [cartas, setCartas] = useState([]);
  const [intention, setIntention] = useState("");
  const [loading, setLoading] = useState(false);
  const [tiradaMostrada, setTiradaMostrada] = useState(false);
  const [interpretacion, setInterpretacion] = useState("");
  const [cartasTirada, setCartasTirada] = useState(null); // <--- variable global para la mesa
  const [reveladas, setReveladas] = useState([]); // Nuevo estado

 


  const handleTirada = async () => {
    setLoading(true);
    try {
      const data = await obtenerCartas();
      setCartasTirada(data);
      setCartas(data.cards || []);
      setIntention(data.intention || "");
      setTiradaMostrada(true);
      setReveladas(Array((data.cards || []).length).fill(false)); // Inicializa todas como no reveladas

    } catch {
      setLoading(true);
      alert("Error al obtener las cartas. Por favor, intenta de nuevo más tarde.");
    }
    setLoading(false);
  };

    // Función para marcar una carta como revelada
  const handleCartaRevelada = idx => {
    setReveladas(prev => prev.map((r, i) => (i === idx ? true : r)));
  };

  const handleLecturaCompleta = async () => {
    setLoading(true);
    try {
      const payload = cartasTirada;
      const res = await interpretInDetail(payload);
      setInterpretacion(res.interpretation);
    } catch (e) {
      setInterpretacion("Error al obtener interpretación detallada.");
    }
    setLoading(false);

  };

  const handleLecturaRapida = async () => {
    setLoading(true);
    try {
      const payload = cartasTirada;
      const res = await interpretSuperficially(payload);
      setLoading(true);
      setInterpretacion(res.interpretation);
    } catch (e) {
      setInterpretacion("Error al obtener interpretación superficial.");
    }
    setLoading(false);
  };

  const todasReveladas = reveladas.length > 0 && reveladas.every(Boolean);


if (loading) return <LoadingBar />;
  return (
    
    <div className="centro-pantalla">

        {!tiradaMostrada ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          <select
            className="selector-intencion"
            value={intention}
            onChange={e => setIntention(e.target.value)}
          >
            {OPCIONES_INTENCION.map(opcion => (
              <option key={opcion.value} value={opcion.value}>
                {opcion.label}
              </option>
            ))}
          </select>
          <button onClick={handleTirada} disabled={intention === ""}>
            Obtener mi Tirada Diaria
          </button>
        </div>
        ) : (

        <div>
          <div className="botones-superiores">
            <button className="boton-mesa" onClick={handleLecturaCompleta} disabled={!todasReveladas}>
            Lectura Completa
            </button>
            <button className="boton-mesa" onClick={handleLecturaRapida} disabled={!todasReveladas}>
            Lectura Rápida
            </button>
          </div>

          <div className="fila-cartas" >
            {Array.isArray(cartas) && cartas.map((carta, idx) => (
              <CartaTarot
                key={idx}
                nombre={carta.name}
                imagen={`https://tarot-api-4puc.onrender.com${carta.image_url}`}
                reversed={carta.is_reversed}
                revelada={reveladas[idx]}
                onRevelada={() => handleCartaRevelada(idx)}
              />
            ))}
          </div>
          <ResultadoLectura interpretation={interpretacion} />
        </div>
      )}
    </div>
  );
}

export default MesaTarot;