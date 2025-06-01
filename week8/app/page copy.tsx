"use client";

import Link from "next/link";
import React, { useState } from "react";
import PokemonDetailDialog from "@/.components/PokemonDetailDialog";
import PokemonItem from "@/.components/PokemonItem";
import data from "@/data"; // 포켓몬 데이터 파일

export default function HomePage() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon: any) => {
    setSelectedPokemon(pokemon);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-center text-3xl font-bold mb-8">Pokemon Store</h1>
      <div className="grid grid-cols-2 gap-8">
        {data.map((pokemon) => (
          <button key={pokemon.id} onClick={() => handlePokemonClick(pokemon)}>
            <PokemonItem
              id={pokemon.id}
              image={pokemon.img}
              name={pokemon.name}
              height={pokemon.height}
              weight={pokemon.weight}
              types={pokemon.types}
              onClick={() => console.log(pokemon.id)}
            />
          </button>
        ))}
      
    </div>
    {
          <PokemonDetailDialog
            open={isDialogOpen}
            onOpenChange={setDialogOpen}
            pokemon={selectedPokemon}
          />
    }
    </div>

  );
}