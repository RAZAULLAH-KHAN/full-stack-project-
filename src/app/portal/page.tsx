import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/mongodb";
import Student from "@/models/Student";
import { logOut } from "@/app/actions/auth";

/**
 * Protected Student Dashboard
 * ───────────────────────────
 * Only accessible to authenticated students. Fetches live data from MongoDB
 * matching the logged-in student's ID.
 */
export default async function PortalDashboard() {
  // 1. Verify Authentication
  const session = await auth();
  if (!session?.user?.studentId) {
    redirect("/portal/login");
  }

  // 2. Fetch User Data
  await dbConnect();
  // Using lean() for better performance since we only need the data
  const studentData = await Student.findOne({ studentId: session.user.studentId }).lean();

  if (!studentData) {
    // This edge case happens if the user was deleted from DB but still has an active session cookie
    return (
      <main className="min-h-screen pt-32 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-error mb-4">Account Not Found</h1>
        <p className="mb-6">We could not locate your student records.</p>
        <form action={logOut}>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold">
            Sign Out
          </button>
        </form>
      </main>
    );
  }

  // 3. Render Dashboard
  return (
    <main className="min-h-screen pt-28 pb-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8">

        {/* Header / Welcome Area */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-4">
              Student Portal
            </span>
            <h1 className="font-headline font-extrabold text-4xl text-primary mb-2">
              Welcome back, {studentData.name.split(" ")[0]}!
            </h1>
            <p className="text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">badge</span>
              {studentData.studentId} | {studentData.program}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <form action={logOut}>
              <button className="text-error font-bold flex items-center gap-2 px-4 py-2 hover:bg-error-container/50 rounded-lg transition-colors">
                <span className="material-symbols-outlined">logout</span>
                Sign Out
              </button>
            </form>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Academic Profile Card */}
          <div className="col-span-1 border border-outline-variant/30 bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
            <h2 className="font-headline font-bold text-xl text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">school</span>
              Academic Standing
            </h2>

            <div className="space-y-6">
              <div>
                <span className="block text-xs uppercase text-outline-variant font-bold tracking-wider mb-1">Cumulative GPA</span>
                <div className="flex items-end gap-2">
                  <span className="font-headline font-black text-5xl text-primary">{studentData.cumulativeGPA.toFixed(2)}</span>
                  <span className="text-on-surface-variant mb-1 font-medium">/ 4.00</span>
                </div>
              </div>

              <div className="h-[1px] bg-outline-variant/20 w-full"></div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs uppercase text-outline-variant font-bold tracking-wider mb-1">Current Semester</span>
                  <span className="font-bold text-lg text-on-surface">{studentData.semester}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase text-outline-variant font-bold tracking-wider mb-1">Status</span>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${studentData.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {studentData.isActive ? "ACTIVE" : "INACTIVE"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enrolled Courses */}
          <div className="col-span-1 lg:col-span-2 border border-outline-variant/30 bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline font-bold text-xl text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">menu_book</span>
                Enrolled Courses
              </h2>
              <button className="text-primary font-bold text-sm hover:underline">View Transcript</button>
            </div>

            {studentData.enrolledCourses && studentData.enrolledCourses.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/30 text-xs uppercase tracking-wider text-outline-variant">
                      <th className="pb-4 font-bold">Course Info</th>
                      <th className="pb-4 font-bold">Credits</th>
                      <th className="pb-4 font-bold">Semester</th>
                      <th className="pb-4 font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.enrolledCourses.map((course: any, idx: number) => (
                      <tr key={idx} className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
                        <td className="py-4">
                          <p className="font-bold text-primary">{course.courseName}</p>
                          <p className="text-xs text-on-surface-variant font-mono mt-1">{course.courseCode}</p>
                        </td>
                        <td className="py-4 text-sm font-medium">{course.creditHours} CR</td>
                        <td className="py-4 text-sm text-on-surface-variant">{course.semester}</td>
                        <td className="py-4">
                          <button className="text-secondary font-bold text-sm bg-secondary/10 px-3 py-1 rounded-md hover:bg-secondary/20 transition-colors">
                            LMS
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-surface-container-low rounded-xl p-8 text-center text-on-surface-variant">
                You are not currently enrolled in any courses for this semester.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
