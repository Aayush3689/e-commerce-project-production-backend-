import { ApiError } from "#utils/ApiError.js";

export const errorHandler = (err, req, res, next) => {
  console.log("err", err);

  // if err is custom error
  if (err instanceof ApiError) {
    return res.status(err).json({
      success: false,
      message: err.message,
    });
  }

  // default error
  return res.status(500).json({
    success: true,
    message: err.message || "internal server errror",
  });
};
