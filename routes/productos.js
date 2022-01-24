const express = require("express")
const router = express.Router()
let productos = require("../productos");

// En este archivo ya vamos a estar parados en http://localhost:3000/productos


router.get("/", (req, res) => {
  res.status(200).send(productos);
});

// Ruta dinámica para obtener un producto por su id -> http://localhost:3000/productos/:id -> http://localhost:3000/productos/4 -> "no hay productos"
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  for (let i = 0; i<productos.length; i++) {
    if(id === productos[i].id) {
      res.status(200).send(productos[i])
    }
  }
  res.status(404).send("No se han encontrado productos 😢")
})

// Ahora vamos a hacer un post a la ruta "/productos" que va a añadir un producto nuevo
router.post("/", (req, res) => {
  const nuevoProducto = req.body
  /* productos[productos.lenght] = nuevoProducto */
  productos.push(nuevoProducto)
  res.status(201).send(nuevoProducto)
})

// Vamos a hacer una ruta para el método DELETE que nos permita borrar un producto
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  // tenemos que filtrar nuestro arreglo de productos y si tuviese uno con un id que coincida, sacar ese producto y devolver el arreglo nuevo de productos
  const productosFiltrados = productos.filter(producto => producto.id !== id)
  if(productos.length === productosFiltrados.length) {
    res.status(404).send("No se ha encontrado ese producto 😭") // -> Aquí se pueden optar por dos caminos para no responder dos veces, o pongo return en el if o genero tambien un else.
  } else {
    productos = productosFiltrados
    res.sendStatus(204)
  }
})

/* router.get("/:parametrouno/:parametro2", (req, res) => {
  // adentro de nuestro req.params -> vamos a tener un objeto del tipo { id: 4 } -> req.params.id -> 4
  console.log(req.params.parametrouno)
  console.log(req.params.parametro2)
  res.status(200).send(req.params) 
}) */

module.exports = router;