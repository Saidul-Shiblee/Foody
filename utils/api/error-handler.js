import { ValidationError } from "yup";

import createHttpError from "http-errors";
const mongoose = require("mongoose");

export default function errorHandler(err, res) {
  // Errors with statusCode >= 500 are should not be exposed
  if (createHttpError.isHttpError(err) && err.expose) {
    // Handle all errors thrown by http-errors module
    console.log("ERR:", err);
    return res.status(err.statusCode).json({ error: { message: err.message } });
  } else if (err instanceof ValidationError) {
    // Handle yup validation errors
    return res.status(400).json({ error: { message: err.errors.join(", ") } });
  } else if (err instanceof mongoose.Error.ValidationError) {
    //Handle mongoose validation error
    return res.status(400).json({
      error: { message: err.message },
      status: createHttpError.isHttpError(err) ? err.statusCode : 400,
    });
  } else if (err.name === "MongoError" && err.code === 11000) {
    //handle mongoDB error
    return res.status(400).json({
      error: { message: "Duplicate record found" },
    });
  } else if (err.name === "UnauthorizedError") {
    //handle jwt error
    if (err.inner.message === "jwt expired") {
      return res.status(401).json({
        error: { message: err.inner.message },
      });
    }
    if (err.inner.message === "No authorization token was found") {
      return res.status(401).json({
        error: { message: err.inner.message },
      });
    }
  } else {
    // default to 500 server error
    return res.status(500).json({
      error: { message: "Internal Server Error", err: err },
      status: createHttpError.isHttpError(err) ? err.statusCode : 500,
    });
  }
}
