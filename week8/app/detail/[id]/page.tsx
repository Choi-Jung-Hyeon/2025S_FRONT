// app/detail/[id]/page.tsx
import Data from "../../../data";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Pokemon {
  id: string | number;
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

export default async function PokemonDetailPage(
  props: { params: Promise<{ id: string }> } // 타입을 Promise 형태로 변경
) {
  const { id } = await props.params; // 비동기 처리 적용
  const pokemon = Data.find((p: Pokemon) => p.id.toString() === id);

  if (!pokemon) {
    return notFound();
  }

  return (
    <div className="container2">
      <div className="circle-border">
        <Image src={pokemon.img} width={200} height={200} className="imgsize" alt={pokemon.name} />
      </div>
      <div>
        <h2 className="detailname">{pokemon.name}</h2>
      </div>
      <table className="table">
        <tbody>
          <tr className="table-tr">
            <td className="table-tr left"><p>Height</p></td>
            <td className="table-tr right"><p>{pokemon.height}</p></td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left"><p>Weight</p></td>
            <td className="table-tr right"><p>{pokemon.weight}</p></td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left"><p>Types</p></td>
            <td className="table-tr right"><p>{pokemon.types.join(", ")}</p></td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left"><p>HP</p></td>
            <td className="table-tr right"><p>{pokemon.hp}</p></td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left"><p>Attack</p></td>
            <td className="table-tr right"><p>{pokemon.attack}</p></td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left"><p>Defense</p></td>
            <td className="table-tr right"><p>{pokemon.defense}</p></td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left"><p>Special Attack</p></td>
            <td className="table-tr right"><p>{pokemon["special-attack"]}</p></td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left"><p>Special Defense</p></td>
            <td className="table-tr right"><p>{pokemon["special-defense"]}</p></td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left"><p>Speed</p></td>
            <td className="table-tr right"><p>{pokemon.speed}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}