// routes/eventos.route.js
import express from "express";
export const router = express.Router();
import { getUsers, postUser } from "../controllers/usuarios.controller.js"
import { authMiddleware } from "../middlewares/auth.js";



// Ruta de prueba GET
router.get("/", authMiddleware, getUsers);

// Ruta POST para crear un usuario
router.post("/", authMiddleware, postUser);

export default router;