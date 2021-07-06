
import PokeCard from "./components/pokeCard";
import InfoSearch from "../../../../components/InfoSearch";

export default function PokemonList({pokemons}) {
  //console.log(pokemons);
  if (!pokemons.length) {
    return <InfoSearch title="No se encontraron resultados!"/>
  }
  return (
    <div className="container-fluid row justify-content-center align-items-center mt-3">
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
