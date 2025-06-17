import React from "react";

/**
 * Mantel amplio y responsivo para 3, 4 o 5 cartas.
 * Las cartas siempre están separadas, centradas y usan el ancho disponible.
 */
export function MantelTarot({ children }) {
  const numCartas = React.Children.count(children);
  // hasta 5 cartas, el gap es proporcional y las cartas se reparten el ancho
  const maxCartas = Math.max(3, Math.min(numCartas, 5));

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1000, // mucho más ancho para web
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "2.5vw",
        padding: "32px 0",
        background: "repeating-linear-gradient(135deg, #f5ecd7 0 60px, #e2d2b0 60px 120px)",
        borderRadius: 24,
        boxShadow: "0 4px 32px #d8c69a",
        minHeight: 340,
        boxSizing: "border-box",
        flexWrap: "nowrap",
        overflowX: "auto",
      }}
    >
      {React.Children.map(children, child => (
        <div
          style={{
            flex: `0 1 calc((100% - ${(maxCartas - 1) * 2.5}vw) / ${maxCartas})`,
            maxWidth: "22vw",
            minWidth: "70px",
            display: "flex",
            justifyContent: "center",
            transition: "max-width 0.2s, min-width 0.2s",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}