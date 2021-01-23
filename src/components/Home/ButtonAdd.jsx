import { useContext } from "react";
import "../../styles/ButtonAdd.scss";
import UserContext from "../userContext";

function ButtonAdd() {
  //const [items, setItems] = useContext(UserContext);
  return (
    <div
      className="button-add"
      onClick={() => {
          console.log('Añade al carrito');
       // setItems([
        //  ...items,
        //  {
         //   id: 1,
          //  titulo: "Pechera de Perro",
          //  precio: 55.0,
          //  cantidad: 50,
        //  },
        //]);
      }}
    >
      <p>Agregar al carrito</p>
    </div>
  );
}

export default ButtonAdd;
