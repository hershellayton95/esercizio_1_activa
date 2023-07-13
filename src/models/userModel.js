import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true, min: 2, max: 100 },
    lastName: { type: String, required: true, min: 2, max: 100 },
    placeOfBirth: { type: String, required: true, min: 2, max: 50 },
    dataOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
  },
  { versionKey: false }
);

const userModel = model("user", userSchema);
export default userModel;
