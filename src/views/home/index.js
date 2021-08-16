import { useEffect } from "react";
import usePokemonStore from "../../zustand/pokemonStore";
import shallow from "zustand/shallow";
import Loading from "../../components/Loading";
import PokemonList from "./components/pokeContainer";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  const { getPokemons, pokemons, filteredPokemons, isLoading, isSearch } =
    usePokemonStore(
      (state) => ({
        getPokemons: state.getPokemons,
        pokemons: state.pokemons,
        filteredPokemons: state.filteredPokemons,
        isLoading: state.isLoading,
        isSearch: state.isSearch,
      }),
      shallow
    );

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //console.log(pokemons);

  return (
    <div className="container_fluid">
      <Header />
      <div className="container-fluid px-0">
        <div className="container">
          {isLoading ? (
            <Loading title="loading results..." />
          ) : (
            <PokemonList pokemons={isSearch ? filteredPokemons : pokemons} />
          )}
        </div>
        <Footer isSearch={isSearch} len={filteredPokemons.length} />
      </div>
    </div>
  );
}
