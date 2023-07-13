import userModel from "../models/userModel.js";
import { handleError, validateObjectId } from "../service/errorService.js";

export const createUser = async (req, res) => {
  const reqUser = req.body;
  try {
    const user = await userModel.create(reqUser);

    return res
      .status(201)
      .json({ status: 201, message: "User has been created", data: user });
  } catch (e) {
    handleError(e, res);
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id;

  try {
    validateObjectId(userId);

    const result = await userModel.updateOne({ _id: userId }, req.body);

    if (result.matchedCount === 0)
      throw new Error("No element to update. User doesn't exist");
    if (result.modifiedCount === 0)
      throw new Error(
        "No element has been updated. Same value(s) in the old field(s)"
      );

    const user = await userModel.findById(userId);

    return res
      .status(200)
      .json({ status: 200, message: "User has been updated", data: user });
  } catch (e) {
    handleError(e, res);
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    validateObjectId(userId);

    const result = await userModel.deleteOne({ _id: userId });

    if (result.deletedCount == 0)
      throw new Error("No element to delete. User doesn't exist");

    return res
      .status(200)
      .json({ status: 200, message: "User has been deleted" });
  } catch (e) {
    handleError(e, res);
  }
};

export const findUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    validateObjectId(userId);

    const user = await userModel.findById(userId);

    if (!user) throw new Error("User doesn't exist");

    return res.status(200).json(user);
  } catch (e) {
    handleError(e, res);
  }
};

export const getUsers = async (req, res) => {
  const birthPlace = req.query.birthPlace;

  let users = null;

  try {
    birthPlace
      ? (users = await userModel.find({ placeOfBirth: birthPlace }))
      : (users = await userModel.find());

    if (users.length == 0) throw new Error("No user(s) in the list");

    return res.status(200).json(users);
  } catch (e) {
    handleError(e, res);
  }
};
