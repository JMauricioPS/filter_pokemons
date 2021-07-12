import setColor from "../../../../../components/setColor";
export default function PokeName({ name, number, type }) {
  //console.log(type[0].type.name);
  //console.log(setColor[type[0].type.name])
  return (
    <div
      className="ps-card-head d-flex mt-3"
      style={{ borderBottom: `solid 2px ${setColor[type[0].type.name]}` }}
    >
      <div
        className="ps-card-head-bg h-100 w-25"
        style={{
          background: `${setColor[type[0].type.name]}`,
        }}
      >
        <p className="ps-number text-center m-0">{number}</p>
      </div>
      <div className="h-100 w-75">
        <p className="ps-name text-center m-0 text-uppercase">{name}</p>
      </div>
    </div>
  );
}
