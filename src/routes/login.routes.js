import express from "express";
import jwt from "jsonwebtoken";
import { usuarios } from "../routes/usuarios.routes.js";
import { login } from "../controllers/login.controller.js";


const router = express.Router();

router.post("/", login);

export default router;
