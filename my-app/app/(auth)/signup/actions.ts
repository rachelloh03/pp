"use server";
import { z } from "zod";
import axios from "axios";
// import { createSession } from "../../../lib/session";
// import { redirect } from "next/navigation";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  try {
    const response = await axios.post(
      "http://localhost:8080/api/user",
      validatedFields.data
    );
    return response.data;
  } catch (error) {
    return error;
  }

  // await createSession(validatedFields.data.username);
}
