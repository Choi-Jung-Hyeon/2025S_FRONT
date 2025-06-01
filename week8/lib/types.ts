// src/lib/types.ts
export interface Pokemon {
  id: string | number;
  name: string;
  height: string;
  weight: string;
  types: string[];
  baseExperience: string;
  abilities: string[];
  hp: string;
  attack: string;
  defense: string;
  specialAttack: string;
  specialDefense: string;
  speed: string;
  img: string;
}