const router = require("express").Router();

router.use("/productos", require("./Producto.routes"));

module.exports = router;
