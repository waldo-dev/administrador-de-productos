import React, { useEffect, useState } from "react";
import { getProductos } from "../../actions/Producto";
import { Link } from "@reach/router";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos().then(({ data }) => {
      console.log(data);
      setProductos(data);
    });
  }, []);
  console.log(productos);

  return (
    <div id="container">
      <h2>All Products:</h2>
      <ul>
        {productos.map(({ _id, nombre }) => (
          <li key={_id}>
            <Link to={`/${_id}`}>{nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
