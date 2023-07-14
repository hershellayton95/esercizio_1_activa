export const stringValidator = {
  validator: (value) =>
    /^[\p{L} .']+$/u.test(value) &&
    !"s".startsWith(" ") &&
    !"s".startsWith("."),
  message: `Invalid string - it should be typed with letters, point and space. It should be started with a letter`,
};

export const genderValidator = {
  validator: (value) => value == "male" || value == "female",
  message: "Gender should be 'male' or 'female'",
};
