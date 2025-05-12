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

export default function PokemonDetail(props:any) {
    const pokemon = Data.find((p:Pokemon) => p.id === props.id);
    if(pokemon){
        return (
            <div className='container2'>
                <circle className='circle-border'>
                    <img src={pokemon.img} className='imgsize' />
                </circle>
                <div>
                    <h2 className='detailname'>{pokemon.name}</h2>
                </div>
                <table className='table'>
                    <tr className='table-tr'>
                        <td className='table-tr left'>
                            <p>Height</p>
                        </td>
                        <td className='table-tr right'>
                            <p>{pokemon.height}</p>
                        </td>
                    </tr>
                    <tr className='table-tr'>
                        <td className='table-tr left'>
                            <p>Weight</p>
                        </td>
                        <td className='table-tr right'>
                            <p>{pokemon.weight}</p>
                        </td>
                    </tr>
                    <tr className='table-tr'>
                        <td className='table-tr left'>
                            <p>Types</p>
                        </td>
                        <td className='table-tr right'>
                            <p>{pokemon.types.join(', ')}</p>
                        </td>
                    </tr>
                    <tr className='table-tr'>
                        <td className='table-tr left'>
                            <p>HP</p>
                        </td>
                        <td className='table-tr right'>
                            <p>{pokemon.hp}</p>
                        </td>
                    </tr>
                    <tr className='table-tr'>
                        <td className='table-tr left'>
                            <p>Attack</p>
                        </td>
                        <td className='table-tr right'>
                            <p>{pokemon.attack}</p>
                        </td>
                    </tr>
                    <tr className='table-tr'>
                        <td className='table-tr left'>
                            <p>Defense</p>
                        </td>
                        <td className='table-tr right'>
                            <p>{pokemon.defense}</p>
                        </td>
                    </tr>
                    <tr className='table-tr'>
                        <td className='table-tr left'>
                            <p>Special Attack</p>
                        </td>
                        <td className='table-tr right'>
                            <p>{pokemon["special-attack"]}</p>
                        </td>
                    </tr>
                    <tr className='table-tr'>
                        <td className='table-tr left'>
                            <p>Special Defense</p>
                        </td>
                        <td className='table-tr right'>
                            <p>{pokemon["special-defense"]}</p>
                        </td>
                    </tr>
                    <tr className='table-tr'>
                        <td className='table-tr left'>
                            <p>Speed</p>
                        </td>
                        <td className='table-tr right'>
                            <p>{pokemon.speed}</p>
                        </td>
                    </tr>
                </table>    
            </div>
        );
    }
    else{
        return <div>해당 포켓몬이 존재하지 않습니다.</div>
    }
}