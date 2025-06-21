export interface CartaTirada {
  name: string;
  suit: string;
  meaning_up: string;
  meaning_reversed: string;
  is_reversed: boolean;
}

export interface OracleApiInput {
  cards: CartaTirada[];
  intention: string;
}

export interface OracleApiOutput {
  interpretation: string;
}