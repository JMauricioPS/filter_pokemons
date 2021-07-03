import setColor from "../../../../../components/setColor";
export default function PokeName({name, number,type}) {
  //console.log(type[0].type.name);
  //console.log(setColor[type[0].type.name])
  return (
    <div
      className="d-flex mt-3"
      style={{ height: "30px", borderBottom: `solid 2px ${setColor[type[0].type.name]}` }}
    >
      <div
        className="h-100 w-25"
        style={{ background: `${setColor[type[0].type.name]}`, borderRadius: "15px 15px 15px 0px" }}
      >
        <p
          className="text-center m-0"
          style={{
            fontFamily: "'Concert One', cursive",
            fontSize: "20px",
            color: "#fff",
          }}
        >
          {number}
        </p>
      </div>
      <div className="h-100 w-75">
        <p
          className="text-center m-0 text-uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px" }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
