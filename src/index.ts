import express from "express";
import { initializeDatabase } from './helpers/db';
import { sendErrorResponse, errorHandler } from "./helpers/utils";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// Use user routes
app.use("/users", userRoutes);

// Use the error handling middleware
app.use(errorHandler);

// Initialize database and start server
initializeDatabase().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
