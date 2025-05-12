import Item from './PokemonItem';
import Data from '../data';

interface Pokemon {
    id: string;
    name: string;
    height: string;
    weight: string;
    types: any;
    'base-Experience': string;
    abilities: any;
    hp: string;
    attack: string;
    defense: string;
    'special-attack': string;
    'special-defense': string;
    speed: string;
    img: string; 
}


export default function PokemonList() {
    return (
        <div className="container">
            {Data.map((pokemon:Pokemon) => (
                <Item 
                    id={pokemon.id}
                    image={pokemon.img}
                    name={pokemon.name}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    types={pokemon.types}
                />
            ))}
        </div>
    );
}