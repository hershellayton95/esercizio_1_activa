import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const reqUser = req.body;
    const user = await userModel.create(reqUser);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const reqUser = req.body;

  try {
    const user = await userModel.updateOne({ _id: userId }, reqUser);
    res
      .status(200)
      .json({ status: 200, message: "Utente Aggiornato", user: user });
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.deleteOne({ _id: userId });
    res
      .status(200)
      .json({ status: 200, message: "Utente Eliminato", user: user });
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
};

export const findUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.findById(userId);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
};

export const getUsers = async (req, res) => {
  const birthPlace = req.query.birthPlace;

  let users = null;

  try {
    birthPlace
      ? (users = await userModel.find({ placeOfBirth: birthPlace }))
      : (users = await userModel.find());

    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
};
