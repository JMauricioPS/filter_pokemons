import { useState } from "react";
import Logo from "../../../assets/iconLogo/pokeball.svg";

export default function BoxSearch({onSearch, onDelete}) {
  const [textSearch,setTextSearch] = useState("");
  return (
    <header className="navbar navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
            className="form-control me-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={textSearch}
            onChange={({target:{value}})=> setTextSearch(value)}
          />
          
          <button className="btn btn-outline-primary me-1" type="submit" onClick={()=>onSearch(textSearch)} >
            Search
          </button>
          <button className="btn btn-outline-danger" type="submit" hidden={!textSearch.length} onClick={()=>{setTextSearch(""); onDelete();}} >
            Borrar
          </button>
        </div>
      </div>
    </header>
  );
}
