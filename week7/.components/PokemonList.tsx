"use client";

import React, { useEffect, useState } from "react";
// axios 삭제 → fetch 사용
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
        // 1. 포켓몬 목록 데이터(Raw List)를 fetch로 가져옵니다.
        // (클라이언트 컴포넌트에서는 캐싱 옵션을 사용하는 서버 전용 fetch는 지원되지 않습니다.)
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if (!res.ok) throw new Error("네트워크 응답이 올바르지 않습니다");
        const responseData = await res.json();
        const results: { name: string; url: string }[] = responseData.results;

        // 2. 각 포켓몬의 상세 정보를 fetch로 가져옵니다.
        const pokemonDetailsPromises = results.map(async (result) => {
          const detailResponse = await fetch(result.url);
          if (!detailResponse.ok) throw new Error("세부 데이터 fetch 에러");
          const data = await detailResponse.json();
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
            "special-attack": data.stats.find(
              (stat: any) => stat.stat.name === "special-attack"
            )?.base_stat.toString(),
            "special-defense": data.stats.find(
              (stat: any) => stat.stat.name === "special-defense"
            )?.base_stat.toString(),
            speed: data.stats.find((stat: any) => stat.stat.name === "speed")?.base_stat.toString(),
            img: data.sprites.other["official-artwork"].front_default,
          } as Pokemon;
        });

        const detailedPokemons = await Promise.all(pokemonDetailsPromises);
        console.log("Fetched detailed Pokémon data:", detailedPokemons);
        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons();
    // 빈 의존성 배열: 컴포넌트가 처음 마운트될 때 한 번 실행됨
  }, []);

  return (
    <div className="container">
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