import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Faculty from "@/models/Faculty";

/**
 * GET /api/faculty
 * Retrieve faculty members. Supports filtering by department and active status.
 * Examples:
 *   /api/faculty?department=Computer%20Science
 *   /api/faculty?active=true
 */
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const department = searchParams.get("department");
    const active = searchParams.get("active");

    const filter: Record<string, unknown> = {};
    if (department) filter.department = department;
    if (active !== null && active !== undefined) filter.isActive = active === "true";

    const faculty = await Faculty.find(filter).sort({ name: 1 });

    return NextResponse.json({
      success: true,
      count: faculty.length,
      data: faculty,
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
 * POST /api/faculty
 * Add a new faculty member.
 */
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const member = await Faculty.create(body);

    return NextResponse.json(
      {
        success: true,
        data: member,
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

    // Handle duplicate email
    if (error instanceof Error && "code" in error && (error as any).code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: "A faculty member with this email already exists",
        },
        { status: 409 }
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
