import { Schema, model } from "mongoose";

const sectionSchema = new Schema(
  {
    name: {
      type: "String",
      required: true,
      trim: true,
    },

    slug: {
      type: "String",
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },

    description: {
      type: "String",
      maxlength: 200,
    },

    imageUrl: {
      type: "String",
    },

    sortOrder: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const SectionModel = model("Section", sectionSchema);
