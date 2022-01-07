import React, { useEffect, useState } from "react";
import axios from "axios";
import { getProductos } from "../../actions/Producto";
import { Link } from "@reach/router";
import style from "./ProductList.module.css";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos().then(({ data }) => {
      console.log(data);
      setProductos(data);
    });
  }, []);
  const removeFromDom = (productoId) => {
    setProductos(productos.filter((producto) => producto._id !== productoId));
  };
  const deleteProducto = (productoId) => {
    axios
      .delete(`http://localhost:5500/api/productos/delete/${productoId}`)
      .then((res) => {
        removeFromDom(productoId);
      });
  };

  return (
    <div id="container">
      <h2>All Products:</h2>
      <ul>
        {productos.map(({ _id, nombre }) => (
          <>
            <li key={_id} className={style.item}>
              <Link to={`/${_id}`}>{nombre}</Link>
            </li>

            <button
              className={style.button}
              onClick={(e) => {
                deleteProducto(_id);
              }}
            >
              Delete
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
