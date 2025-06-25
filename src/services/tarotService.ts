import { TarotApiResponse } from "../types/tarot-api.types";

export async function obtenerCartas(intention:string): Promise<TarotApiResponse> {
    const number_of_cards = 3; // Número de cartas a obtener
    const host = "http://localhost:8000"; // Cambia esto si es necesario
    const response = await fetch(`${host}/get-spread?num_cards=${number_of_cards}&intention${intention}`, {
    headers: {
      accept: "application/json"
    }
  });
  if (!response.ok) throw new Error("Error al obtener cartas");
  const data: TarotApiResponse = await response.json();
  console.log("Respuesta completa:", data);
  return data;
}