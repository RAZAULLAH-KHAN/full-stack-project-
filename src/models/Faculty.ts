import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Faculty Schema
 * ──────────────
 * Stores faculty and staff profiles for dynamic loading
 * on the Academics and Faculty pages.
 */

export interface IFaculty extends Document {
  name: string;
  title: string;
  department: string;
  expertise: string[];
  publications: { title: string; url: string }[];
  imageUrl: string;
  bio: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const FacultySchema = new Schema<IFaculty>(
  {
    name: {
      type: String,
      required: [true, "Faculty name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    title: {
      type: String,
      required: [true, "Title/designation is required"],
      trim: true,
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
    },
    expertise: {
      type: [String],
      default: [],
    },
    publications: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    imageUrl: {
      type: String,
      default: "/images/default-faculty.png",
    },
    bio: {
      type: String,
      trim: true,
      maxlength: [1000, "Bio cannot exceed 1000 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for common queries
FacultySchema.index({ department: 1 });
FacultySchema.index({ isActive: 1 });
FacultySchema.index({ name: "text", expertise: "text" }); // Text search

const Faculty: Model<IFaculty> =
  mongoose.models.Faculty ||
  mongoose.model<IFaculty>("Faculty", FacultySchema);

export default Faculty;
