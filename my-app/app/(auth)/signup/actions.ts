"use server";
import { z } from "zod";

const schemaRegister = z.object({
  username: z.string().min(1).max(20, {
    message: "Username must be between 1 and 20 chars",
  }),
  password: z.string().min(6).max(100, {
    message: "Password must be between 6 and 100 chars",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export async function signup(prevState: any, formData: FormData) {
  const validatedFields = schemaRegister.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register",
    };
  }

  return { ...prevState, data: "User Registered Successfully" };
}
