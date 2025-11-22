import { Router } from "express";
import { sectionHandler } from "./section.controller.js";

const router = Router();

router.get("/", sectionHandler);

export default router;
