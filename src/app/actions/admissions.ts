"use server";

import dbConnect from "@/lib/mongodb";
import Application from "@/models/Application";
import { revalidatePath } from "next/cache";

/**
 * Server Action: Submit Admission Application
 * ─────────────────────────────────────────────
 * Called from the client-side application form.
 * Connects to MongoDB, validates input, creates an Application document,
 * and returns a result object to the client.
 */

export type ApplicationResult = {
  success: boolean;
  message: string;
  applicationId?: string;
  errors?: Record<string, string>;
};

export async function submitApplication(
  _prevState: ApplicationResult | null,
  formData: FormData
): Promise<ApplicationResult> {
  try {
    await dbConnect();

    // Extract form fields
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const programOfInterest = formData.get("programOfInterest") as string;
    const previousEducation = formData.get("previousEducation") as string;

    // Basic server-side validation
    const errors: Record<string, string> = {};
    if (!firstName?.trim()) errors.firstName = "First name is required";
    if (!lastName?.trim()) errors.lastName = "Last name is required";
    if (!email?.trim()) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      errors.email = "Invalid email format";
    if (!phone?.trim()) errors.phone = "Phone number is required";
    if (!programOfInterest)
      errors.programOfInterest = "Please select a program";
    if (!previousEducation?.trim())
      errors.previousEducation = "Previous education is required";

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: "Please fix the errors below.",
        errors,
      };
    }

    // Create the application in MongoDB
    const application = await Application.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      programOfInterest,
      previousEducation: previousEducation.trim(),
    });

    // Revalidate the admissions page to reflect new data
    revalidatePath("/admissions");

    return {
      success: true,
      message:
        "Your application has been submitted successfully! We will review it and get back to you.",
      applicationId: application._id.toString(),
    };
  } catch (error: unknown) {
    // Handle Mongoose validation errors
    if (error instanceof Error && error.name === "ValidationError") {
      return {
        success: false,
        message: "Validation failed. Please check your inputs.",
        errors: { form: error.message },
      };
    }

    console.error("Application submission error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
