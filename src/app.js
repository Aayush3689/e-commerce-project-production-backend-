import express from "express";
import { registerRoutes } from "#loaders/routes.js";
import cors from 'cors'

export const createApp = () => {
  const app = express();

  // deafult middlewares
  app.use(cors)
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // all routes
  registerRoutes(app);

  return app;
};
