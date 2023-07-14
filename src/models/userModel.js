import { Schema, model } from "mongoose";
import {
  genderValidator,
  stringValidator,
} from "../service/validatorService.js";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 100,
      validate: stringValidator,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 100,
      validate: stringValidator,
    },
    placeOfBirth: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      validate: stringValidator,
    },
    dateOfBirth: { type: Date, required: true },
    gender: {
      type: String,
      required: true,
      validate: genderValidator,
    },
  },
  { versionKey: false }
);

const userModel = model("User", userSchema);

export default userModel;
