import React, { useContext } from 'react';
const UserContext = React.createContext({
    id: 8,
    titulo: "Producto 4",
    precio: 400,
    cantidad: 100,
},
{
    id: 8,
      titulo: "Producto 4",
      precio: 400,
      cantidad: 100,
  },
  {
    id: 8,
      titulo: "Producto 4",
      precio: 400,
      cantidad: 100, 
  },
  {
    id: 8,
    titulo: "Producto 4",
    precio: 400,
    cantidad: 100, 
  },
  {
    id: 8,
      titulo: "Producto 4",
      precio: 400,
      cantidad: 100,
  },
);

export const useUserContext = () => useContext(UserContext);


export default UserContext;