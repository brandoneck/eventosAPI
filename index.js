import express from "express";
import eventosRoute from "./src/routes/eventos.routes.js";
import usuariosRoute from "./src/routes/usuarios.routes.js";
import loginRoute from "./src/routes/login.routes.js";
import { authMiddleware } from "./src/middlewares/auth.js";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";



const app = express();
const PORT = 3000;
dotenv.config();
connectDB();


// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Rutas
app.use("/events", eventosRoute);
app.use("/users", authMiddleware, usuariosRoute);
app.use("/login", loginRoute);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor corriendo!");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});