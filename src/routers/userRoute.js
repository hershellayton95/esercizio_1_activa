import { Router } from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  findUserById,
  getUsers,
} from "../controllers/userController.js";

const router = Router();

// 1. creazione di un nuovo User;
router.post("/", createUser);
// 2. aggiornamento di un utente tramite il suo id;
router.put("/:id(\\d+)", updateUser);
// 3. cancellazione di un utente tramite il suo id;
router.delete("/:id(\\d+)", deleteUser);
// 4. ricerca di un utente tramite id;
router.get("/:id(\\d+)", findUserById);
// 5. ricerca di tutti gli utenti
// 6. ricerca di tutti gli utenti tramite luogo di nascita
router.get("/", getUsers);

export default router;
