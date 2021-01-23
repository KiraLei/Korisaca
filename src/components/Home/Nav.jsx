import "../../styles/Nav.scss";
import CartWidget from "./CartWidget";

function Nav() {
  return (
    <div className="navbar">
      <nav>
        <h1>KOSARICA</h1>
        <ul>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Contactanos</a>
          </li>
          <CartWidget />
        </ul>
      </nav>
      <div className="line"></div>
    </div>
  );
}
export default Nav;
