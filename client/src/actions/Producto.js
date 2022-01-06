import axios from "axios";

const crearProducto = async (data) => {
  try {
    await axios.post("http://localhost:5500/api/productos/new", data);
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

const getTodos = async () => {
  try {
    const { data } = await axios.get("/api/product");
    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, data: [] };
  }
};

const getUnProducto = async (id) => {
  try {
    const { data } = await axios.get(`/api/product/${id}`);
    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};

const editarProducto = async (id, data) => {
  try {
    await axios.patch(`/api/product/edit/${id}`, data);
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

export { crearProducto, getTodos, getUnProducto, editarProducto };
