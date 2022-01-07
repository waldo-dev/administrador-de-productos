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

const obtenerUnProducto = async (req, res) => {
  try {
    await ProductoModel.findOne({
      _id: req.params.id,
    }).then((producto) => res.json(producto));
  } catch (err) {
    console.log(err);
  }
};

const actualizarUnProducto = async (req, res) => {
  await ProductoModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.json(err));
};

const eliminarUnProducto = async (req, res) => {
  await ProductoModel.deleteOne({ _id: req.params.id })
    .then((deletedProduct) => res.json(deletedProduct))
    .catch((err) => res.json(err));
};

module.exports = {
  crearProducto,
  obtenerProductos,
  obtenerUnProducto,
  actualizarUnProducto,
  eliminarUnProducto,
};
