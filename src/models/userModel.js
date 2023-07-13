import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true, min: 2, max: 100 },
    lastName: { type: String, required: true, min: 2, max: 100 },
    placeOfBirth: { type: String, required: true, min: 2, max: 50 },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
  },
  { versionKey: false }
);

const userModel = model("User", userSchema);

export default userModel;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - placeOfBirth
 *         - dateOfBirth
 *         - gender
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of the user
 *         lastName:
 *           type: string
 *           description: The book author
 *         placeOfBirth:
 *           type: string
 *           description: The first name of the user
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *         gender:
 *           type: string
 *           description: The first name of the user
 *       example:
 *           firstName: Filippo
 *           lastName: Di Marco
 *           placeOfBirth: Palermo
 *           dateOfBirth: 1995-07-05T22:01:00.000Z
 *           gender: Male
 */
