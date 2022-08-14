import contactsRouter from "./routes/contact.route";
import express, { Application, Request, Response } from "express";
import { AppError } from "./middlewares/handleAppError.middleware";
import { globalErrorHandler } from "./controllers/handleAppError.controller";

const app: Application = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => res.status(200).json({ status: "Welcome to INTERACTLY CONTACTS API" }));

app.use("/api/contacts", contactsRouter);

app.all("*", (req, _res, next) => next(new AppError(`Cannot find ${req.originalUrl} on this server`, 400)));

app.use(globalErrorHandler);

export default app;
