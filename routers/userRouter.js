import express from "express";
import { getLogin, postLogin } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.login, getLogin);
userRouter.post(routes.login, postLogin);

export default userRouter;
