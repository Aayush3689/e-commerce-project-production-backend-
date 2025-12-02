import { model, Schema } from "mongoose";

// category schema
const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },

    // relation to section
    section: {
      type: Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },

    description: {
      type: String,
      maxlength: 200,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    thumbnail: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const categoryModel = model("Category", categorySchema);
