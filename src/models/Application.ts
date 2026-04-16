import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Application Schema
 * ──────────────────
 * Stores prospective student applications for admissions.
 * Status transitions: Pending → Reviewed → Accepted / Rejected
 */

export interface IApplication extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  programOfInterest: string;
  previousEducation: string;
  applicationStatus: "Pending" | "Reviewed" | "Accepted" | "Rejected";
  createdAt: Date;
  updatedAt: Date;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    programOfInterest: {
      type: String,
      required: [true, "Program of interest is required"],
      enum: {
        values: [
          "Computer Science",
          "Electrical Engineering",
          "Business Administration",
          "Mathematics",
          "Physics",
          "Environmental Science",
          "Civil Engineering",
        ],
        message: "{VALUE} is not a valid program",
      },
    },
    previousEducation: {
      type: String,
      required: [true, "Previous education details are required"],
      trim: true,
    },
    applicationStatus: {
      type: String,
      enum: ["Pending", "Reviewed", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true, // Auto-generates createdAt & updatedAt
  }
);

// Index for fast lookups by email and status
ApplicationSchema.index({ email: 1 });
ApplicationSchema.index({ applicationStatus: 1 });

// Prevent model recompilation in Next.js hot-reload
const Application: Model<IApplication> =
  mongoose.models.Application ||
  mongoose.model<IApplication>("Application", ApplicationSchema);

export default Application;
