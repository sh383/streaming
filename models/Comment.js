import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  content: { type: String, required: "Comment is required" },
});

export const commentModel = mongoose.model("comments", commentSchema);
