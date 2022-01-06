const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El campo nombre es requerido"],
  },
  precio: {
    type: Number,
    required: [true, "El campo precio es requerido"],
  },
  descripcion: {
    type: String,
    required: [true, "El campo descripcion es requerido"],
  },
});

const ProductoModel = model("productos", ProductoSchema);

module.exports = ProductoModel;
