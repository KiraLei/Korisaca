import { useEffect, useState } from "react";
import "../../styles/Cards.scss";
import Cards from "./CardProduct";
import DataProducts from '../userContext';

function ListProducts() {
  const [items, setItems] = useState([]);
  const products = [
    {
      id: 1,
      titulo: "Pechera de Perro",
      precio: 55.0,
      cantidad: 50,
    },
    {
      id: 2,
      titulo: "Pechera de Perro",
      precio: 250,
      cantidad: 250,
    },
    {
      id: 3,
      titulo: "Pechera de Perro",
      precio: 800,
      cantidad: 70,
    },
    {
      id: 4,
      titulo: "Pechera de Perro",
      precio: 400,
      cantidad: 90,
    },
    {
      id: 5,
      titulo: "Pechera de Perro",
      precio: 500,
      cantidad: 10,
    },
    {
      id: 6,
      titulo: "Producto 2",
      precio: 250,
      cantidad: 25,
    },
    {
      id: 7,
      titulo: "Producto 3",
      precio: 800,
      cantidad: 35,
    },
    {
      id: 8,
      titulo: "Producto 4",
      precio: 400,
      cantidad: 100,
    },
  ];

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 0);
  });

  useEffect(() => {
    getProducts.then((rta) => setItems(rta));
  }, []);

  useEffect(() => {
    items.map((item) => console.log(item));
    console.log(items);
  }, [items]);

  return (
    <div className="container cards">
      {items.length ? (
        <>
          {items.map((item) => (
            <Cards
              key={item.id}
              titulo={item.titulo}
              precio={item.precio}
              cantidad={item.cantidad}
            ></Cards>
          ))}
        </>
      ) : (
        <p>Cargando items...</p>
      )}
    </div>
  );
}
export default ListProducts;
