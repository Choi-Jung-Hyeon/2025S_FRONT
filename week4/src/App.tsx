import './App.css';
import './reset.css';
import Detail from './components/PokemonDetail';
import List from './components/PokemonList';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<List />}>
          </Route>
          <Route path="/detail/:id" element={<Detail />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;