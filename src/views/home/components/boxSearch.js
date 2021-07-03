import Logo from "../../../assets/iconLogo/pokeball.svg";

export default function BoxSearch() {
  return (
    <header className="navbar navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          POKEDEX
        </a>

        <div className="container d-flex w-50">
          <input
            className="form-control me-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
