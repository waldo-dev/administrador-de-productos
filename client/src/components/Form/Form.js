import React from "react";
import style from "./Form.module.css";
import { crearProducto } from "../../actions/Producto";

const crearNuevoProducto = async (formData) => {
  try {
    const { success } = await crearProducto(formData);
    if (!success) window.alert("No se pudo subir");
  } catch {}
};

const Form = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    let formData = {
      nombre: e.target[0].value,
      precio: parseInt(e.target[1].value),
      descripcion: e.target[2].value,
    };
    crearNuevoProducto(formData);
  };

  return (
    <form className={style.container} onSubmit={onSubmit}>
      <label className={style.label}>
        Title
        <input type="text" className={style.inputTitle} />
      </label>

      <label className={style.label}>
        Price
        <input type="number" className={style.inputPrice} />
      </label>

      <label className={style.label}>
        Description
        <input type="text" className={style.inputDescription} />
      </label>

      <button className={style.button} onSubmit={onSubmit}>
        Create
      </button>
    </form>
  );
};

export default Form;
