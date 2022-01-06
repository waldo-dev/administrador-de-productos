const ProductoModel = require("../models/Producto.model");

const crearProducto = async (req, res) => {
  try {
    const { nombre, precio, descripcion } = req.body;
    const producto = await ProductoModel.create({
      nombre: nombre,
      precio: precio,
      descripcion: descripcion,
    }).then((productoGuardado) =>
      res.json({ msj: "producto cargado exitosamente" })
    );
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};

const obtenerProductos = async (req, res) => {
  try {
    const productos = await ProductoModel.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ msj: "Internal server error" });
  }
};

const obtenerUnProducto = (req, res) => {
  try {
    ProductoModel.findOne({
      _id: req.params.id,
    }).then((producto) => res.json(producto));
  } catch (err) {
    console.log(err);
  }
};

module.exports = { crearProducto, obtenerProductos, obtenerUnProducto };
