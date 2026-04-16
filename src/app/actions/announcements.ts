"use server";

import dbConnect from "@/lib/mongodb";
import Announcement from "@/models/Announcement";

/**
 * Fetch latest published announcements from MongoDB.
 * Used by the homepage news carousel and portal.
 */
export async function getLatestAnnouncements(limit: number = 10) {
  await dbConnect();

  const announcements = await Announcement.find({ isPublished: true })
    .sort({ date: -1 })
    .limit(limit)
    .lean();

  return announcements.map((ann) => ({
    _id: ann._id.toString(),
    title: ann.title,
    description: ann.description,
    category: ann.category,
    date: ann.date ? new Date(ann.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }) : "",
    thumbnailUrl: ann.thumbnailUrl || "/images/default-news.png",
    author: ann.author || "Admin",
  }));
}
