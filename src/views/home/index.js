import { useEffect} from "react";

import usePokemonStore from "../../zustand/pokemonStore";
import shallow from "zustand/shallow";

import Loading from "../../components/Loading";
import BoxSearch from "./components/boxSearch";
import PokeType from "./components/pokeSelecType";
import PokemonList from "./components/pokeContainer";

export default function Home() {

  const { getPokemons, pokemons, isLoading, filterPokemons, filteredPokemons, isSearch, deleteSearch  } = usePokemonStore(
    (state) => ({
      getPokemons: state.getPokemons,
      pokemons: state.pokemons,
      isLoading: state.isLoading,
      filterPokemons: state.filterPokemons,
      filteredPokemons: state.filteredPokemons,
      isSearch: state.isSearch,
      deleteSearch: state.deleteSearch,
    }),
    shallow
  );

  useEffect(() => {
    getPokemons();
  }, []);

  //console.log(pokemons);
  return (
    <div className="container">
      <BoxSearch onSearch={filterPokemons} onDelete={deleteSearch} />
      {/* <PokeType /> */}
      {
        isLoading ? <Loading title="loading results..."/>
        :
        <PokemonList pokemons={isSearch ? filteredPokemons : pokemons} />
      }
    </div>
  );
}
