import { Router } from "express";
import blogRoutes from "./blog.routes";
import commentRoutes from "./comment.routes";
import userRoutes from "./user.routes";

const router = Router();

router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

export default router;
