import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
        imgSrc: "./public/mew.png"
      },
    ];

  return (
    <div className="display">
      <MyTitle  />
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <Navbar pokemonList={pokemonList} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} />
    </div>
  );
}

export default App;