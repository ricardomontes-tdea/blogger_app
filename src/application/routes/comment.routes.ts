import { Router } from "express";
import * as commentController from "../controllers/comment.controller";

const router = Router();

router.get("/", commentController.getAll);
router.get("/:id", commentController.getById);
router.post("/", commentController.create);
router.put("/:id", commentController.update);
router.delete("/:id", commentController.remove);

export default router;
