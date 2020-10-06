import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { home } from "./controllers/globalController";
import { localMiddlewares } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

import routes from "./routes";

const app = express();

app.set("view engine", "pug");

app.use(localMiddlewares);

app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);
app.use(routes.users, userRouter);

export default app;
