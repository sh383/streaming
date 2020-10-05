import express from "express";
import { home, join } from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.route(routes.join).get(join).post(join);

export default globalRouter;
