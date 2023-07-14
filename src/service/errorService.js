import { isValidObjectId } from "mongoose";

export const handleError = (e, res) => {
  let statusCode = 500;
  let message = "Server Side Error";

  if (
    e.message.includes("User doesn't exist") ||
    e.message.includes("No user(s) in the list")
  )
    statusCode = 404;

  if (
    e.message.includes("User validation failed") ||
    e.message.includes("Cast") ||
    e.message.includes("Same value")
  )
    statusCode = 400;

  if (statusCode !== 500) message = e.message;

  return res.status(statusCode).json({ status: statusCode, message: message });
};

export const validateObjectId = (id) => {
  if (!isValidObjectId(id)) throw new Error("User doesn't exist");
};

export const dateFormatValidator = (body) => {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;
  const extendedRegEx = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  if (body.dateOfBirth && !extendedRegEx.test(body.dateOfBirth)) {
    if (regEx.test(body.dateOfBirth)) return;
    throw new Error(
      "User validation failed: Birthday should be in 'yyyy-mm-dd' or 'yyyy-mm-ddThh:mm:ss.nnnZ' format"
    );
  }
};
