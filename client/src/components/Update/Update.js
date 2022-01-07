import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Update.module.css";
import { navigate } from "@reach/router";

const Update = (params) => {
  const { id } = params;
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5500/api/productos/${id}`).then((res) => {
      setNombre(res.data.nombre);
      setPrecio(res.data.precio);
      setDescripcion(res.data.descripcion);
    });
  }, []);
  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5500/api/productos/update/${id}`, {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
      })
      .then((res) => console.log(res));
    navigate(`http://localhost:3000/`);
  };
  return (
    <div>
      <h2>Actualizar Producto</h2>
      <form className={style.formContainer} onSubmit={updateProduct}>
        <label htmlFor="nombre" className={style.label}>
          Nombre:
        </label>
        <input
          type="text"
          value={nombre}
          id="nombre"
          name="nombre"
          className={style.input}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />

        <label htmlFor="precio" className={style.label}>
          Precio:
        </label>
        <input
          type="number"
          value={precio}
          id="precio"
          name="precio"
          className={style.input}
          onChange={(e) => {
            setPrecio(e.target.value);
          }}
        />

        <label htmlFor="descripcion" className={style.label}>
          Descripcion:{" "}
        </label>
        <input
          type="text"
          value={descripcion}
          className={style.input}
          id="descripcion"
          name="descripcion"
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        />

        <button onSubmit={updateProduct} className={style.button}>
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default Update;
