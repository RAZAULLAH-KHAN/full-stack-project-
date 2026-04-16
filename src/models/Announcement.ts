import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Announcement Schema
 * ───────────────────
 * Powers the dynamic news carousel on the homepage and portal.
 * Categories help filter announcements by type.
 */

export interface IAnnouncement extends Document {
  title: string;
  description: string;
  category: "Admissions" | "Research" | "Announcement" | "Event" | "Achievement";
  date: Date;
  thumbnailUrl: string;
  isPublished: boolean;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const AnnouncementSchema = new Schema<IAnnouncement>(
  {
    title: {
      type: String,
      required: [true, "Announcement title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ["Admissions", "Research", "Announcement", "Event", "Achievement"],
        message: "{VALUE} is not a valid category",
      },
    },
    date: {
      type: Date,
      default: Date.now,
    },
    thumbnailUrl: {
      type: String,
      default: "/images/default-news.png",
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    author: {
      type: String,
      trim: true,
      default: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for feed queries
AnnouncementSchema.index({ date: -1 }); // Latest first
AnnouncementSchema.index({ category: 1, isPublished: 1 });
AnnouncementSchema.index({ title: "text", description: "text" }); // Search

const Announcement: Model<IAnnouncement> =
  mongoose.models.Announcement ||
  mongoose.model<IAnnouncement>("Announcement", AnnouncementSchema);

export default Announcement;
