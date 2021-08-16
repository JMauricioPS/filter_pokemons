import { useEffect, useState } from "react";

export default function BoxSearch({ searching, onSearch, onDelete }) {
  const [textSearch, setTextSearch] = useState(searching);

  useEffect(() => {
    setTextSearch(searching);
  }, [searching]);

  //console.log("me renderize - boxSearch");
  return (
    <form className="d-flex col-12 col-md-8 ">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search Pokemon"
        aria-label="Search Pokemon"
        value={textSearch}
        onChange={({ target: { value } }) => setTextSearch(value)}
      />
      <button
        className="btn btn-outline-primary me-2"
        type="submit"
        hidden={!textSearch.length}
        onClick={(e) => {e.preventDefault(); onSearch(textSearch)}}
      >
        Search
      </button>
      <button
        className="btn btn-outline-danger"
        type="submit"
        hidden={!textSearch.length}
        onClick={(e) => {
          e.preventDefault();
          setTextSearch("");
          onDelete();
        }}
      >
        Delete
      </button>
    </form>
  );
}
