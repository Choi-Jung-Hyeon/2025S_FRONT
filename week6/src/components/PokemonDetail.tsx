// src/components/PokemonDetail.tsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POKEMON_DETAIL = gql`
  query getPokemonDetail($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      types {
        type {
          name
        }
      }
      stats {
        stat {
          name
        }
        base_stat
      }
      abilities {
        ability {
          name
        }
      }
      sprites {
        other {
          official_artwork {
            front_default
          }
        }
      }
    }
  }
`;

interface PokemonDetailProps {
  id: string;
}

export default function PokemonDetail(props: PokemonDetailProps) {
  const { id } = props;
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const pokemon = data.pokemon;
  if (!pokemon) {
    return <div>해당 포켓몬이 존재하지 않습니다.</div>;
  }

  // stats 배열에서 특정 스탯(base_stat)을 추출하는 헬퍼 함수
  const statValue = (statName: string) => {
    const statObj = pokemon.stats.find((s: any) => s.stat.name === statName);
    return statObj ? statObj.base_stat : 'N/A';
  };

  return (
    <div className="container2">
      {/* 원래의 circle-border 디자인 유지 (예제에서는 <div>로 감싸서 사용) */}
      <div className="circle-border">
        <img
          src={pokemon.sprites.other.official_artwork.front_default}
          className="imgsize"
          alt={pokemon.name}
        />
      </div>
      <div>
        <h2 className="detailname">{pokemon.name}</h2>
      </div>
      <table className="table">
        <tbody>
          <tr className="table-tr">
            <td className="table-tr left">
              <p>Height</p>
            </td>
            <td className="table-tr right">
              <p>{pokemon.height}</p>
            </td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left">
              <p>Weight</p>
            </td>
            <td className="table-tr right">
              <p>{pokemon.weight}</p>
            </td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left">
              <p>Types</p>
            </td>
            <td className="table-tr right">
              <p>
                {pokemon.types
                  .map((t: any) => t.type.name)
                  .join(', ')}
              </p>
            </td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left">
              <p>HP</p>
            </td>
            <td className="table-tr right">
              <p>{statValue('hp')}</p>
            </td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left">
              <p>Attack</p>
            </td>
            <td className="table-tr right">
              <p>{statValue('attack')}</p>
            </td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left">
              <p>Defense</p>
            </td>
            <td className="table-tr right">
              <p>{statValue('defense')}</p>
            </td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left">
              <p>Special Attack</p>
            </td>
            <td className="table-tr right">
              <p>{statValue('special-attack')}</p>
            </td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left">
              <p>Special Defense</p>
            </td>
            <td className="table-tr right">
              <p>{statValue('special-defense')}</p>
            </td>
          </tr>
          <tr className="table-tr">
            <td className="table-tr left">
              <p>Speed</p>
            </td>
            <td className="table-tr right">
              <p>{statValue('speed')}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}