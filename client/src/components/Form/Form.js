import React, { useState } from "react";
import style from "./Form.module.css";
import { crearProducto } from "../../actions/Producto";
import { navigate } from "@reach/router";

const crearNuevoProducto = async (formData) => {
  try {
    const { success } = await crearProducto(formData);
    if (!success) window.alert("No se pudo subir");
  } catch {}
};

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = {
      nombre: nombre,
      precio: parseInt(precio),
      descripcion: descripcion,
    };
    crearNuevoProducto(formData);
  };

  return (
    <>
      <h1>Agregar un Producto</h1>
      <form className={style.container} onSubmit={onSubmit}>
        <label className={style.label}>
          Title
          <input
            type="text"
            className={style.inputTitle}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>

        <label className={style.label}>
          Price
          <input
            type="number"
            className={style.inputPrice}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </label>

        <label className={style.label}>
          Description
          <input
            type="text"
            className={style.inputDescription}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </label>

        <button className={style.button} onClick={onSubmit}>
          Create
        </button>
      </form>
    </>
  );
};

export default Form;
