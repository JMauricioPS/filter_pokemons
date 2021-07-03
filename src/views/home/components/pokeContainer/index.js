
import PokeCard from "./components/pokeCard";

export default function PokemonList({pokemons}) {
  //console.log(pokemons);
  return (
    <div className="container-fluid row justify-content-center mt-3">
      {
        
        pokemons?.map((pokemon, index)=>{
          //console.log(pokemon);
          return(
            <PokeCard key={index} pokemon={pokemon}/>
          );
        })
      }
    </div>
  );
}
