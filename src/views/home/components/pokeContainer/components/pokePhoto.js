export default function PokePhoto({ url: { dream_world } }) {
  //console.log(dream_world);
  return (
    <div className="text-center mt-2 mb-2">
      <img
        className="ps-image"
        src={dream_world?.front_default ?? "#"}
        alt="pokemon"
      />
    </div>
  );
}
