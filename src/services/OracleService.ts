import { OracleApiInput, OracleApiOutput } from "../types/oracle-api.types";

const API_BASE = "https://tarot-api-4puc.onrender.com"; // Cambia por tu base real

export async function interpretInDetail(
  tirada_cartas: OracleApiInput
): Promise<OracleApiOutput> {
  const response = await fetch(`${API_BASE}/oracle/interpret-in-detail`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tirada_cartas),
  });
  if (!response.ok) throw new Error("Error al obtener interpretación detallada");
  return (await response.json()) as OracleApiOutput;
}

export async function interpretSuperficially(
  tirada_cartas: OracleApiInput
): Promise<OracleApiOutput> {
  const response = await fetch(`${API_BASE}/oracle/interpret-superficially`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tirada_cartas),
  });
  if (!response.ok) throw new Error("Error al obtener interpretación superficial");
  return (await response.json()) as OracleApiOutput;
}