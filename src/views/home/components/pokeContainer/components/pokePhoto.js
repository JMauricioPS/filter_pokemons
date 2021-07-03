export default function PokePhoto({url:{dream_world}}) {
  //console.log(dream_world);
  return (
    <div className="text-center mt-2 mb-2">
      <img src={dream_world?.front_default ?? '#'} width="170px" height="170px" alt="pokemon" />
    </div>
  );
}
