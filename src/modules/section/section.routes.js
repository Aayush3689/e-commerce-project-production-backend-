import { Router } from "express";
import { listSectionsHandler } from "./section.controller.js";

const router = Router();

router.get("/", listSectionsHandler);

export default router;
