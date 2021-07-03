
import setType from "../../../../../assets/iconType/setType";
import PokeName from "./pokeName";
import PokePhoto from "./pokePhoto";

export default function PokeCard({pokemon}) {
  return (
    <div className="col-xs-6 p-0 m-2 shadow mb-4 bg-while rounded" style={{minWidth:"250px"}}>
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
        <button type="button" className="btn btn-outline-secondary">
          See Details
        </button>
      </div>
    </div>
  );
}
