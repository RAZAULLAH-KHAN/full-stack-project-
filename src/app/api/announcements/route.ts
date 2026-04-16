import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Announcement from "@/models/Announcement";

/**
 * GET /api/announcements
 * Retrieve announcements. Supports filtering by category and published status.
 * Examples:
 *   /api/announcements?category=Research
 *   /api/announcements?limit=5
 */
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") || "20", 10);

    const filter: Record<string, unknown> = { isPublished: true };
    if (category) filter.category = category;

    const announcements = await Announcement.find(filter)
      .sort({ date: -1 })
      .limit(limit);

    return NextResponse.json({
      success: true,
      count: announcements.length,
      data: announcements,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/announcements
 * Create a new announcement.
 */
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const announcement = await Announcement.create(body);

    return NextResponse.json(
      {
        success: true,
        data: announcement,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ValidationError") {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 }
    );
  }
}
