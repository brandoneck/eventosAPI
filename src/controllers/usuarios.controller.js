import express from "express";
import { createUser, getAllUsers } from "../services/usuarios.service.js";

export const getUsers = async (req, res) => {
    try{
        const users = await getAllUsers();
        res.status(200).json(users);
        
    } catch(error){
        res.status(400).json({message: error.message})
    }
};

export const postUser = async (req, res) => {
  try {
    const user = await createUser(req.body);

    res.status(201).json({
      message: "Usuario creado",
      user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
