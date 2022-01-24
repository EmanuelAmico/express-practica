const express = require("express")
const router = express.Router()
const productosRoutes = require("./productos")

// Acá estamos parados en http://localhost:3000/
router.use("/productos", productosRoutes)

/* router.get("/", (req, res) => {
  res.status(200).send("Estoy respondiendo con este string");
}); */


module.exports = router