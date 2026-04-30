import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authService } from "../services/auth.service.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await authService(username, password);

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
