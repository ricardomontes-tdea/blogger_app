import { Router } from "express";
import * as blogController from "../controllers/blog.controller";

const router = Router();

router.get("/", blogController.getAll);
router.get("/:id", blogController.getById);
router.post("/", blogController.create);
router.put("/:id", blogController.update);
router.delete("/:id", blogController.remove);

export default router;
