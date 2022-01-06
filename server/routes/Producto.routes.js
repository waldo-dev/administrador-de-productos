const router = require("express").Router();
const controller = require("../controllers/Producto.controller");

router.post("/new", controller.crearProducto);

module.exports = router;
