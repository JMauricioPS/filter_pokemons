import { useEffect, useState } from "react";
import iconType from "../../../../assets/iconType/setType";
import CardSelect from "./components/cardSelect";
import "./style.css";

export default function PokeType({ types, filter, onDelete, activeFilter }) {
  const [isClick, setIsClick] = useState(false);
  const [selectType, setSelectType] = useState(activeFilter);

  useEffect(() => {
    setSelectType(activeFilter);
  }, [activeFilter]);

  const changeActiveType = (type) => {
    setIsClick(!isClick);
    setSelectType(type);
    filter(type);
  };

  const selectBoxActive = (e) => {
    if (e.currentTarget === e.target) {
      console.log("contenedor padre");
      setIsClick(!isClick);
      console.log(e);
    }
  };

  const removeSelection = () => {
    setIsClick(!isClick);
    onDelete();
    setSelectType("");
  };

  return (
    <div className="container-fluid">
      <p className="text-black-50 border-bottom mb-0">Filter by</p>
      <form>
        <div className="ps-selectbox bg-white">
          <div
            onClick={selectBoxActive}
            className={`ps-select px-auto ${isClick && "active"}`}
          >
            <div className="ps-contenido-select mx-auto">
              {selectType.length ? (
                <div className="ps-contenido-opcion">
                  <img
                    src={iconType[selectType.toLocaleLowerCase()]}
                    alt="icon"
                  />
                  <p className="text-black-50 my-auto text-capitalize">
                    {selectType}
                  </p>
                </div>
              ) : (
                <p className="text-black-50 my-auto">Pick up</p>
              )}
            </div>
            <i className="fas fa-angle-down my-auto"></i>
          </div>
          <div className={`ps-opciones ${isClick && "active"}`}>
            <div className="opcion" onClick={removeSelection}>
              <div className="ps-contenido-opcion none">
                <p className="text-black-50 my-auto mx-auto text-capitalize">
                  Neither
                </p>
              </div>
            </div>
            {types?.map((type, index) => {
              return (
                <CardSelect
                  setActive={changeActiveType}
                  key={index}
                  name={type.name}
                  icon={iconType[type.name]}
                />
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}
