const router = require("express").Router();
const controller = require("../controllers/Producto.controller");

router.post("/new", controller.crearProducto);
router.get("/", controller.obtenerProductos);
router.get("/:id", controller.obtenerUnProducto);

module.exports = router;
