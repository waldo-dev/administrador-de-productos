import React, { useEffect, useState } from "react";
import axios from "axios";

const Detail = (props) => {
  const [producto, setProducto] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5500/api/productos/" + props.id).then((res) =>
      setProducto({
        ...res.data,
      })
    );
  }, []);
  return (
    <div>
      <h2>Nombre: {producto.nombre}</h2>
      <p>Precio: {producto.precio}</p>
      <p>Descripcion: {producto.descripcion}</p>
    </div>
  );
};

export default Detail;
