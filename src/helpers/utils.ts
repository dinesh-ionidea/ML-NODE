import { Request, Response, NextFunction } from "express";

// Function to send a standardized error response
export function sendErrorResponse(res: Response, message: string, statusCode: number = 500) {
  res.status(statusCode).json({ error: message });
}

// Middleware to handle errors
export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  console.error("An error occurred:", error);
  sendErrorResponse(res, "Internal Server Error");
}