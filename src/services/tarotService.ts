import { TarotApiResponse } from "../types/tarot-api.types";

export async function obtenerCartas(intention:string): Promise<TarotApiResponse> {
    const number_of_cards = 3; // Número de cartas a obtener
    const response = await fetch(`http://localhost:8000/get-spread?num_cards=${number_of_cards}&intention${intention}`, {
    headers: {
      accept: "application/json"
    }
  });
  if (!response.ok) throw new Error("Error al obtener cartas");
  const data: TarotApiResponse = await response.json();
  console.log("Respuesta completa:", data);
  return data;
}