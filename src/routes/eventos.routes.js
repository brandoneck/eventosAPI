// routes/eventos.route.js
import express from "express";
import { authMiddleware } from "../middlewares/auth.js"
const router = express.Router(); 

const eventos = [
  { id: 1, nombre: "Evento 1", fecha: "2024-06-01" },
  { id: 2, nombre: "Evento 2", fecha: "2024-06-15" },
  { id: 3, nombre: "Evento 3", fecha: "2024-07-01" },
];

// Ruta de prueba GET
router.get("/", (req, res) => {
  res.send(eventos);
});

// Ruta POST para crear un usuario
router.post("/", (req, res) => {
  const nuevoUsuario = req.body; // req.body viene del cliente

  console.log(req.body);
  eventos.push(nuevoUsuario); // Agrega el nuevo usuario al array de eventos
  res.json({
    message: "Usuario creado",
    user: nuevoUsuario,
  });
});

export default router;