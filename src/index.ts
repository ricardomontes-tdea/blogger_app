import express from "express";
import routes from "./application/routes";
import { requestLogger } from "./application/middlewares/logger.middleware";
import { errorHandler } from "./application/middlewares/errorHandler.middleware";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(requestLogger);

app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
