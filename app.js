import express from "express";
import bodyParser from "body-parser";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import session from "express-session";
import mongoose from "mongoose";
import morgan from "morgan";
import multer from "multer";
import passport from "passport";
import { localMiddlewares } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

import routes from "./routes";

const app = express();
const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddlewares);

app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);
app.use(routes.users, userRouter);

export default app;
