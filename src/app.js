import express from "express";
import cors from 'cors'
import { registerRoutes } from "#loaders/routes.js";
import { errorHandler } from "#middlewares/error.middleware.js";

export const createApp = () => {
  const app = express();

  // deafult middlewares
  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // all routes
  registerRoutes(app);

  // global error handler
  app.use(errorHandler)

  return app;
};
