import React, { useState } from "react";

/**
 * Carta responsiva, nunca se solapa y mantiene proporción 2:3.
 * El tamaño se adapta al espacio disponible.
 */
export function CartaTarot({
  imagen,
  dorso = "https://upload.wikimedia.org/wikipedia/commons/5/53/Card_back_06.svg",
  nombre = "",
}) {
  const [revelada, setRevelada] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "2/3",
        perspective: 600,
        cursor: "pointer",
        position: "relative",
        transition: "width 0.2s, height 0.2s",
        boxSizing: "border-box",
        minWidth: "70px",
        maxWidth: "22vw",
        minHeight: "105px",    // 70px * 1.5 (proporción 2:3)
        maxHeight: "33vw", 
      }}
      onClick={() => setRevelada((v) => !v)}
      title="Haz click para voltear la carta"
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.7s cubic-bezier(.4,1.6,.4,1)",
          transformStyle: "preserve-3d",
          transform: revelada ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Dorso */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: 16,
            boxShadow: "2px 2px 12px #aaa",
            border: "2px solid #333",
            background: "#eee",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          <img
            src={dorso}
            alt="Dorso de la carta"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "opacity 0.3s",
              userSelect: "none"
            }}
            draggable={false}
          />
        </div>
        {/* Frente */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 16,
            boxShadow: "2px 2px 12px #aaa",
            border: "2px solid #333",
            background: "#fafafa",
            overflow: "hidden",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {revelada ? (
            <>
              {imagen ? (
                <img
                  src={imagen}
                  alt={nombre}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  draggable={false}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#999",
                  }}
                >
                  (sin imagen)
                </div>
              )}
              {/* Nombre solo visible si está de frente y revelada */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  background: "rgba(255,255,220,0.93)",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.1em",
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  padding: "8px 0",
                  borderTop: "1px solid #c7b16d",
                  userSelect: "none"
                }}
              >
                {nombre}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}