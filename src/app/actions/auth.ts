"use server";

import { signIn, signOut } from "../../../auth";
import { AuthError } from "next-auth";

/**
 * Server action to handle user login using Auth.js credentials provider.
 */
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid Student ID or password.";
        default:
          return "Something went wrong during authentication.";
      }
    }
    // Next.js redirect mechanism throws an error to halt execution, which we must bubble up
    throw error;
  }
}

/**
 * Server action to handle user logout.
 */
export async function logOut() {
  await signOut({ redirectTo: "/" });
}
