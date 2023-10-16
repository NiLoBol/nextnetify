import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    title: String,
    clickbox: Boolean,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

export default Todo;
