import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos" });

export const localMiddlewares = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Streaming";
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
