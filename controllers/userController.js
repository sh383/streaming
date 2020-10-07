import passport from "passport";
import "../db";
import mongoose from "mongoose";
import userModel from "../models/User"; // 나중에 이름 체크 export default
import routes from "../routes";

export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const getJoin = async (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  console.log(req.body);
  if (password !== password2) {
    // alert("Password must be same");
    res.redirect(routes.join);
  } else {
    try {
      const user = await userModel({
        name,
        email,
      });
      await userModel.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.join);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: Login });
};
export const postLogin = (req, res) => {
  // problem
  passport.authenticate("local", {
    successRedirect: routes.home,
    failureRedirect: routes.login,
    failureFlash: "Invalid username or password",
  });
};
