
import icon from "../../../assets/iconType/icons/pokemon_type_grass.svg";

export default function PokeType() {
  return (
    <div className="container-fluid d-flex align-items-center bg-info" style={{height:"35px"}}>
      <div className="mx-3 bg-warning">
      Filter by:
      </div>
      <div className="p-0 bg-danger">
      <div className="d-flex align-items-center" style={{height:"30px", border:"solid 1px #38BF4B", borderRadius:"15px"}}>
         <img className="m-0 p-0" src={icon} width="30px" height="30px" alt="icon"/>
         <p className="">Grass</p>
       </div>
      </div>
    </div>
  );
}
