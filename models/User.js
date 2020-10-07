import mongoose, { Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new Schema({
  email: { type: String, required: "email is required" },
  name: { type: String, required: "name is required" },
  avatarUrl: { type: String },
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
const userModel = mongoose.model("users", userSchema);
export default userModel;
