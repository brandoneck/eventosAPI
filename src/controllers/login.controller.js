import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { usuarios } from "../routes/usuarios.routes.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const validUsername = usuarios.find(
      (usr) => usr.username.toLowerCase() === username.toLowerCase(),
    );
    if (!validUsername) {
      return res.status(401).json({ message: "User doesn't exists." });
    }
    const isValid = validUsername.password == password; // mock

    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3. Generar token (JWT normalmente)
    const token = jwt.sign(
      { username: validUsername.username }, // payload
      "secret-key", // ⚠️ en producción va en .env
      { expiresIn: "1h" },
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
