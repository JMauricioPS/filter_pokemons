export default function CardSelect({ name, icon, setActive }) {
  return (
    <div
      className="opcion"
      onClick={(e) => {
        setActive(e.currentTarget.innerText);
        console.log(e.currentTarget.innerText);
      }}
    >
      <div className="ps-contenido-opcion">
        <img src={icon} alt="icon" />
        <p className="text-black-50 my-auto text-capitalize">{name}</p>
      </div>
    </div>
  );
}
