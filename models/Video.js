import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
  title: { type: String },
  description: { type: String },
  fileUrl: { type: String },
  views: { type: Number },
  createdAt: { type: Date, default: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
});

export const videoModel = mongoose.model("videos", videoSchema);
