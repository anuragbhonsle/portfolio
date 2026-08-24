import mongoose, { Schema, models, model } from "mongoose";

interface IContact {
  email: string;
  message?: string;
  createdAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    email: { type: String, required: true, lowercase: true },
    message: { type: String, required: false },
  },
  { timestamps: true },
);

export const Contact = mongoose.model<IContact>("Contact", contactSchema);
