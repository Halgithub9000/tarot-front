import { TarotApiResponse } from "../types/tarot-api.types";

export async function obtenerCartas(): Promise<TarotApiResponse> {
    const response = await fetch("http://localhost:8000/get-spread?num_cards=5&intention=general", {
    headers: {
      accept: "application/json"
    }
  });
  if (!response.ok) throw new Error("Error al obtener cartas");
  const data: TarotApiResponse = await response.json();
  console.log("Respuesta completa:", data);
  return data;
}