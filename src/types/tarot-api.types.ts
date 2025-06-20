export interface CartaTarotApi {
  name: string;
  suit: string;
  meaning_up: string;
  meaning_reversed: string;
  is_reversed: boolean;
}

export interface TarotApiResponse {
  cards: CartaTarotApi[];
  intention: string;
}