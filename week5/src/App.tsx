import './App.css';
import Detail from './components/PokemonDetail';
import List from './components/PokemonList';
import Title from './components/PokemonTitle';
import { usestore } from './Pokemonstore';

function App() {
  const setid = usestore((state:any) => state.setselectedpokemonid)
  const getid = usestore((state:any) => state.id)
  return (
    <div className="App">
      <Title onClick={() => setid('-1')}/>
      { getid === '-1' ? <List /> : <Detail id={getid}/>}
    </div>
  );
}

export default App;