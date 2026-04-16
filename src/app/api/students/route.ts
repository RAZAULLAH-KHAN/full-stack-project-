import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Student from "@/models/Student";

/**
 * GET /api/students
 * Retrieve students. Supports filtering by program and semester.
 * Password field is excluded by default (select: false in schema).
 * Examples:
 *   /api/students?program=Computer%20Science
 *   /api/students?semester=3
 */
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const program = searchParams.get("program");
    const semester = searchParams.get("semester");

    const filter: Record<string, unknown> = { isActive: true };
    if (program) filter.program = program;
    if (semester) filter.semester = parseInt(semester, 10);

    const students = await Student.find(filter).sort({ name: 1 });

    return NextResponse.json({
      success: true,
      count: students.length,
      data: students,
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
 * POST /api/students
 * Register a new student.
 * NOTE: In production, password should be hashed with bcrypt before storing.
 * That will be implemented in Phase 6 (Auth).
 */
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    // Placeholder: In Phase 6, we'll hash the password with bcrypt
    // For now, just store it (for schema testing purposes only)
    const student = await Student.create(body);

    // Remove password from response
    const { hashedPassword: _, ...response } = student.toObject();

    return NextResponse.json(
      {
        success: true,
        data: response,
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

    // Handle duplicate studentId or email
    if (error instanceof Error && "code" in error && (error as any).code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: "A student with this ID or email already exists",
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
