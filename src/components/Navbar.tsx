import "../Navbar.css";

interface Pokemon {
    name: string;
    imgSrc?: string;
  }

  interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

function Navbar({pokemonList, pokemonIndex, setPokemonIndex}: NavBarProps) {

    console.log(pokemonIndex, pokemonList)

    // const handlePrevClick = () => {
    //     if (pokemonIndex > 0) {
    //     setPokemonIndex(pokemonIndex -1)
    //     }
    //   }
    
    //   const handleNextClick = () => {
    //     if (pokemonIndex < pokemonList.length -1) {
    //     setPokemonIndex(pokemonIndex +1)
    //     }
    //   }

    // const handleGetRightPokemon = () => {
    //     setPokemonIndex(pokemon.id)
    // }

    return (
        <div className="button-container">
            {pokemonList.map((pokemon, index) => (
                <button className="button" key={index} onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
            ))}
        </div>
    );
  }
  
  export default Navbar;