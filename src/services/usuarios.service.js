import express from "express";
export const router = express.Router();
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
import { User } from "../models/User.js";

export const usuarios = [
  // password: Test123
  {
    id: 1,
    username: "Brandon",
    password: "$2b$10$0Df.OY/UwPQIcPXrZSBq0OolT6rM2nuEYGmwGibIWe8hDjwjMbi2m",
  },
  {
    id: 2,
    username: "Juan",
    password: "$2b$10$0Df.OY/UwPQIcPXrZSBq0OolT6rM2nuEYGmwGibIWe8hDjwjMbi2m",
  },
  {
    id: 3,
    username: "Francisco",
    password: "$2b$10$0Df.OY/UwPQIcPXrZSBq0OolT6rM2nuEYGmwGibIWe8hDjwjMbi2m",
  },
];

export const getAllUsers = async () => {
  return usuarios;
};

export const createUser = async (userData) => {
  const normalizedUsername = userData.username.toLowerCase();

  const existingUser = usuarios.find(
    (u) => u.username && u.username.toLocaleLowerCase() === normalizedUsername,
  );

  if (existingUser) {
    throw new Error("Username already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const nuevoUsuario = {
    id: randomUUID(),
    username: normalizedUsername,
    password: hashedPassword,
  };

  usuarios.push(nuevoUsuario);

  return nuevoUsuario;
};
