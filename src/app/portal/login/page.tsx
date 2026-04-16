import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/mongodb";
import Student from "@/models/Student";
import bcrypt from "bcryptjs";

/**
 * Login Page
 * ──────────
 * Displays the login form for the Student Portal.
 * Also includes a temporary dev-only seed function to ensure a test user exists.
 */
export default async function LoginPage() {
  // If the user is already logged in, redirect them to the portal
  const session = await auth();
  if (session?.user) {
    redirect("/portal");
  }

  // --- TEMP: DEV ONLY SEEDING FOR TEST USER ---
  // In a real app, students would be registered via an admin panel.
  // We're seeding a test user here so you can test the login feature.
  if (process.env.NODE_ENV === "development") {
    try {
      await dbConnect();
      const hashedPassword = await bcrypt.hash("password123", 10);
      await Student.findOneAndUpdate(
        { studentId: "CS-12345" },
        {
          $setOnInsert: {
            studentId: "CS-12345",
            email: "test_student@namal.edu.pk",
            name: "Test Student",
            hashedPassword,
            program: "Computer Science",
            semester: 6,
            cumulativeGPA: 3.8,
            enrolledCourses: [
              { courseCode: "CS401", courseName: "Human Computer Interaction", creditHours: 3, semester: "Spring 2024" },
              { courseCode: "CS402", courseName: "Artificial Intelligence", creditHours: 4, semester: "Spring 2024" },
              { courseCode: "CS403", courseName: "Software Project Management", creditHours: 3, semester: "Spring 2024" }
            ]
          }
        },
        { upsert: true, returnDocument: "after" }
      );
      console.log("✅ Test student ready: CS-12345 / password123");
    } catch (e) {
      console.error("Failed to seed test user", e);
    }
  }
  // ---------------------------------------------

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-bl-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-secondary/5 rounded-tr-full blur-3xl" />

      <div className="relative z-10 w-full px-4 flex flex-col items-center">
        {/* Logo/Brand link to home */}
        <Link href="/" className="mb-12 inline-block">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-sm">
              <span className="font-headline font-black text-white text-xl">N</span>
            </div>
            <span className="font-headline font-extrabold text-2xl text-primary tracking-tight">Namal.</span>
          </div>
        </Link>

        {/* The Form */}
        <LoginForm />

        {/* Developer Note (for testing only) */}
        <div className="mt-12 max-w-sm w-full bg-blue-50/50 border border-blue-200 p-4 rounded-xl text-center">
          <p className="text-xs text-blue-800 font-bold mb-1">Test Credentials</p>
          <p className="text-xs text-blue-600 font-mono">ID: CS-12345</p>
          <p className="text-xs text-blue-600 font-mono">Password: password123</p>
        </div>
      </div>
    </main>
  );
}
