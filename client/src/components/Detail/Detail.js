import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import style from "./Detail.module.css";

const Detail = (props) => {
  const [producto, setProducto] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5500/api/productos/" + props.id).then((res) =>
      setProducto({
        ...res.data,
      })
    );
  }, []);
  const removeFromDom = (productoId) => {
    setProducto(producto.filter((producto) => producto._id !== productoId));
  };
  const deleteProducto = (productoId) => {
    axios
      .delete(`http://localhost:5500/api/productos/delete/${productoId}`)
      .then((res) => {
        removeFromDom(productoId);
      });
    navigate(`http://localhost:3000/`);
  };
  return (
    <div>
      <h2>Nombre: {producto.nombre}</h2>
      <p>Precio: {producto.precio}</p>
      <p>Descripcion: {producto.descripcion}</p>
      <Link to={"/update/" + producto._id} className={style.edit}>
        Edit
      </Link>
      <button
        className={style.button}
        onClick={(e) => {
          deleteProducto(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Detail;
