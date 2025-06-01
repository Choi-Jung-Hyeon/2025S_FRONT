"use client";

import Link from "next/link";
import PokemonItem from "../.components/PokemonItem";
import data from "../data";
import PokemonTitle from "../.components/PokemonTitle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-12 px-4">
      <header className="mb-12 text-center">
        <PokemonTitle />
      </header>
      <main className="grid grid-cols-2 gap-8 w-full">
        {data.map((pokemon) => (
          <Link key={pokemon.id} href={`/detail/${pokemon.id}`}>
            <div className="cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <PokemonItem
                id={pokemon.id}
                image={pokemon.img}
                name={pokemon.name}
                height={pokemon.height}
                weight={pokemon.weight}
                types={pokemon.types}
                onClick={() => console.log(pokemon.id)}
              />
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}