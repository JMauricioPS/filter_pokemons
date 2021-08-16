import { useEffect } from "react";
import Logo from "../../../../assets/iconLogo/pokeball.svg";
import BoxSearch from "./components/boxSearch";
import TypePokemon from "./components/typePokemon";

import usePokemonStore from "../../../../zustand/pokemonStore";
import shallow from "zustand/shallow";

export default function Header() {
  const {
    getTypes,
    typePokemons,
    text,
    textType,
    filterPokemons,
    filterByType,
    deleteSearch,
  } = usePokemonStore(
    (state) => ({
      getTypes: state.getTypes,
      typePokemons: state.typePokemons,
      text: state.text,
      textType: state.textType,
      filterPokemons: state.filterPokemons,
      filterByType: state.filterByType,
      deleteSearch: state.deleteSearch,
    }),
    shallow
  );

  useEffect(() => {
    getTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src={Logo}
                alt="logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Pokedex - First 12 pokemons
            </a>
          </div>
        </nav>
      </header>
      <nav className="navbar sticky-top navbar-light bg-light border-bottom">
        <div className="d-inline-block d-md-flex  container-fluid row">
          <BoxSearch
            searching={text}
            onSearch={filterPokemons}
            onDelete={deleteSearch}
          />
          <TypePokemon
            types={typePokemons}
            filter={filterByType}
            onDelete={deleteSearch}
            activeFilter={textType}
          />
        </div>
      </nav>
    </>
  );
}
