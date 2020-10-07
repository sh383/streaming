import express from "express";
import {
  getJoin,
  home,
  postJoin,
  postLogin,
} from "../controllers/userController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

export default globalRouter;
