import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Student Schema
 * ──────────────
 * Manages registered students for the student portal.
 * Passwords are stored as hashes (bcrypt will be added in the Auth phase).
 */

export interface IStudent extends Document {
  studentId: string;
  hashedPassword: string;
  name: string;
  email: string;
  enrolledCourses: {
    courseCode: string;
    courseName: string;
    creditHours: number;
    semester: string;
  }[];
  cumulativeGPA: number;
  program: string;
  semester: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const StudentSchema = new Schema<IStudent>(
  {
    studentId: {
      type: String,
      required: [true, "Student ID is required"],
      unique: true,
      trim: true,
      match: [/^[A-Z]{2,4}-\d{4,6}$/, "Student ID must be in format like CS-12345 or BSCS-1234"],
    },
    hashedPassword: {
      type: String,
      required: [true, "Password is required"],
      select: false, // Never return password in queries by default
    },
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    enrolledCourses: [
      {
        courseCode: { type: String, required: true },
        courseName: { type: String, required: true },
        creditHours: { type: Number, required: true, min: 1, max: 6 },
        semester: { type: String, required: true },
      },
    ],
    cumulativeGPA: {
      type: Number,
      default: 0.0,
      min: [0.0, "GPA cannot be less than 0"],
      max: [4.0, "GPA cannot exceed 4.0"],
    },
    program: {
      type: String,
      required: [true, "Program is required"],
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
    semester: {
      type: Number,
      required: [true, "Current semester is required"],
      min: [1, "Semester must be at least 1"],
      max: [8, "Semester cannot exceed 8"],
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

// Indexes (studentId and email indexes are already created by `unique: true` in the schema)
StudentSchema.index({ program: 1, semester: 1 });

const Student: Model<IStudent> =
  mongoose.models.Student ||
  mongoose.model<IStudent>("Student", StudentSchema);

export default Student;
