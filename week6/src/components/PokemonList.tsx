// src/components/PokemonList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./PokemonItem";
import { usestore } from "../Pokemonstore";

interface Pokemon {
  id: string;
  name: string;
  height: string;
  weight: string;
  types: string[];
  "base-Experience": string;
  abilities: string[];
  hp: string;
  attack: string;
  defense: string;
  "special-attack": string;
  "special-defense": string;
  speed: string;
  img: string;
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const setid = usestore((state: any) => state.setselectedpokemonid);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // 1. 포켓몬 목록 데이터(Raw List)를 가져옵니다.
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        const results: { name: string; url: string }[] = response.data.results;

        // 2. 각 포켓몬의 상세 정보를 가져옵니다.
        const pokemonDetailsPromises = results.map(async (result) => {
          const detailResponse = await axios.get(result.url);
          const data = detailResponse.data;
          return {
            id: data.id.toString(),
            name: data.name,
            height: data.height.toString(),
            weight: data.weight.toString(),
            types: data.types.map((t: any) => t.type.name),
            "base-Experience": data.base_experience.toString(),
            abilities: data.abilities.map((a: any) => a.ability.name),
            hp: data.stats.find((stat: any) => stat.stat.name === "hp")?.base_stat.toString(),
            attack: data.stats.find((stat: any) => stat.stat.name === "attack")?.base_stat.toString(),
            defense: data.stats.find((stat: any) => stat.stat.name === "defense")?.base_stat.toString(),
            "special-attack": data.stats.find((stat: any) => stat.stat.name === "special-attack")?.base_stat.toString(),
            "special-defense": data.stats.find((stat: any) => stat.stat.name === "special-defense")?.base_stat.toString(),
            speed: data.stats.find((stat: any) => stat.stat.name === "speed")?.base_stat.toString(),
            img: data.sprites.other["official-artwork"].front_default,
          } as Pokemon;
        });

        const detailedPokemons = await Promise.all(pokemonDetailsPromises);
        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons();
    // 빈 의존성 배열을 사용해 렌더링 시 한 번만 요청하도록 합니다.
  }, []);

  return (
    <div className="container">
      {/* heading 요소에 텍스트를 넣어 jsx-a11y 경고가 발생하지 않도록 */}
      {pokemons.map((pokemon) => (
        <Item
          key={pokemon.id}
          id={pokemon.id}
          image={pokemon.img}
          name={pokemon.name}
          height={pokemon.height}
          weight={pokemon.weight}
          types={pokemon.types}
          onClick={() => setid(pokemon.id)}
        />
      ))}
    </div>
  );
}