import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { usuarios } from "../services/usuarios.service.js";

export const authService = async (username, password) => {

  const user = usuarios.find((u) => u.username === username);

  if (!user) throw new Error("User not found");
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) throw new Error("Invalid credentials");
  const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });

  return token;
};
