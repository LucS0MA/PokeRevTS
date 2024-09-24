import "../PokemonCard.css";

type PokemonCardProps = {
    pokemon: {
      imgSrc?: string; 
      name: string;
    };
  };


  const PokemonCard = ({ pokemon }: PokemonCardProps) => {

    console.log(pokemon)
    
    return (
    <figure className={`card ${pokemon.name}`}>
        {pokemon.imgSrc ? (
        <img className="pokemonImg" src={pokemon.imgSrc} alt="pokemonImg" />
    ) : (
        <p>???</p>
    )}
        <figcaption>{pokemon.name}</figcaption>
    </figure>
  )}
  
  export default PokemonCard;