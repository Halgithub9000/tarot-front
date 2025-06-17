import React from "react";

/**
 * Componente para mostrar el nombre de la carta de tarot de forma independiente.
 * Úsalo donde quieras mostrar el nombre (por ejemplo, bajo el mantel o como tooltip).
 */
export function DetallesCartaTarot({ nombre, visible }) {
  if (!visible) return null;
  return (
    <div
      style={{
        marginTop: 12,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.2em",
        background: "rgba(20, 20, 16, 0.95)",
        display: "inline-block",
        borderRadius: 8,
        padding: "6px 18px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.09)",
        border: "2px solid #bfa14a",
      }}
    >
      {nombre}
    </div>
  );
}