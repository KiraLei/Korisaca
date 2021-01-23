import product from "../../assets/product.png";
import "../../styles/Cards.scss";
import ButtonAdd from './ButtonAdd';


function Cards({titulo, precio, cantidad}) {
  return (
      <div className="card">
        <figure>
          <img src={product} alt="producto" />
        </figure>
        <div className="information">
          <p>{titulo}</p>
          <p> Cantidad: {cantidad} unid.</p>
          <p>
            Precio: S/ <span>{precio}</span>
          </p>
          <ButtonAdd />
        </div>
      </div>
  );
}
export default Cards;