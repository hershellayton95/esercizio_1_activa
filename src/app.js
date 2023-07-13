import express from "express";
import userRoutes from "./routes/userRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerSpec } from "./configurations/swaggerConfig.js";

const app = express();
//plugin
app.use(express.json());

//routes
app.use("/user", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
