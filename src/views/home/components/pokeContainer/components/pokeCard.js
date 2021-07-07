import { Link } from "react-router-dom";
import setType from "../../../../../assets/iconType/setType";
import PokeName from "./pokeName";
import PokePhoto from "./pokePhoto";

export default function PokeCard({pokemon}) {
  return (
    <div className="col p-0 m-2 shadow mb-4 bg-while rounded" style={{minWidth:"250px", maxWidth:"250px"}}>
      <PokeName name={pokemon?.name} number={pokemon?.id} type={pokemon?.types}/>
      <PokePhoto url={pokemon?.sprites.other}/>
      <div className="text-center">
        {
          pokemon?.types.map(({type:{name}}, index)=>{
            //console.log(name);
            return(
              <img key={index} src={setType[name]} title={name.toUpperCase()} width="32px" height="32px" alt="type" />
            );
          })
        }
      </div>
      <div className="text-center mt-2 mb-3">
        <Link to={`/pokemon/${pokemon?.id}`} className="btn btn-outline-secondary">
          See Details
        </Link>
      </div>
    </div>
  );
}
