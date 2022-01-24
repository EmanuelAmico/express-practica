// Aquí en app.js vamos a definir todas las configuraciones de nuestro server y vamos a levantarlo
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes")
const app = express();

// Definir configuraciones para nuestro server:
// Definimos nuestro logger para todas nuestras rutas
app.use(morgan("tiny"));

// Definir otro middleware para que nuestro servidor cuando le llegue información y que sepa que esa info es un json -> para que el req.body no nos llegue "undefined"
app.use(express.json());

// Definimos nuestras rutas modularizadas
app.use("/", routes)

// http://localhost:3000 -> : 3000 -> representa el puerto
app.listen(3000, () => {
  console.log("Servidor levantado en http://localhost:3000");
});
