export const createUser = async (req, res) => {
  res.json({
    path: "creazione di un nuovo User",
  });
};

export const updateUser = async (req, res) => {
  res.json({
    path: "aggiornamento di un utente tramite il suo id",
  });
};

export const deleteUser = async (req, res) => {
  res.json({
    path: "cancellazione di un utente tramite il suo id",
  });
};

export const findUserById = async (req, res) => {
  const userId = req.params.id;
  res.json({
    path: "ricerca di un utente tramite id " + userId,
  });
};

export const getUsers = async (req, res) => {
  const birthPlace = req.query.birthPlace;
  res.json({
    path: "ricerca di tutti gli utenti " + birthPlace,
  });
};
