// routes/eventos.route.js
import express from "express";
export const router = express.Router();

export const usuarios = [
  // password: Test123
  { id: 1, username: "Brandon", password: "$2b$10$0Df.OY/UwPQIcPXrZSBq0OolT6rM2nuEYGmwGibIWe8hDjwjMbi2m" },
  { id: 2, username: "Juan", password: "$2b$10$0Df.OY/UwPQIcPXrZSBq0OolT6rM2nuEYGmwGibIWe8hDjwjMbi2m" },
  { id: 3, username: "Francisco", password: "$2b$10$0Df.OY/UwPQIcPXrZSBq0OolT6rM2nuEYGmwGibIWe8hDjwjMbi2m" },
];

// Ruta de prueba GET
router.get("/", (req, res) => {
  res.send(usuarios);
});

// Ruta POST para crear un usuario
router.post("/", (req, res) => {
  const nuevoUsuario = req.body; // req.body viene del cliente

  console.log(req.body);
  usuarios.push(nuevoUsuario); // Agrega el nuevo usuario al array de eventos
  res.json({
    message: "Usuario creado",
    user: nuevoUsuario,
  });
});

export default router;