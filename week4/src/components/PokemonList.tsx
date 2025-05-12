import Item from './PokemonItem';
import Data from '../data';
import { usestore } from '../Pokemonstore';

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
    const setid = usestore((state:any) => state.setselectedpokemonid)
    return (
        <div>            
            <div className="container">
                {Data.map((pokemon:Pokemon) => (
                    <Item 
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
        </div>
    );
}