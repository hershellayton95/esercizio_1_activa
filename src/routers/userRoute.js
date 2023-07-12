import { Router } from "express";

const router = Router();

// 1. creazione di un nuovo User;
router.post("/", async (req, res) => {
  res.json({
    path: "creazione di un nuovo User",
  });
});
// 2. aggiornamento di un utente tramite il suo id;
router.put("/:id(\\d+)", async (req, res) => {
  res.json({
    path: "aggiornamento di un utente tramite il suo id",
  });
});
// 3. cancellazione di un utente tramite il suo id;
router.delete("/:id(\\d+)", async (req, res) => {
  res.json({
    path: "cancellazione di un utente tramite il suo id",
  });
});
// 4. ricerca di un utente tramite id;
router.get("/:id(\\d+)", async (req, res) => {
  const userId = req.params.id;
  res.json({
    path: "ricerca di un utente tramite id " + userId,
  });
});
// 5. ricerca di tutti gli utenti
// 6. ricerca di tutti gli utenti tramite luogo di nascita
router.get("/", async (req, res) => {
  const birthPlace = req.query.birthPlace;
  res.json({
    path: "ricerca di tutti gli utenti " + birthPlace,
  });
});

export default router;
