"use server";
import { z } from "zod";
import { createSession, deleteSession } from "../../../lib/session";
import { redirect } from "next/navigation";

const testUser = {
  username: "test",
  password: "password",
  email: "test@email.com",
};

const schemaRegister = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export async function signin(prevState: any, formData: FormData) {
  const validatedFields = schemaRegister.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to log in",
    };
  }

  const { username, password, email } = validatedFields.data;
  // need to change this to check any user, not just testUser
  if (email !== testUser.email) {
    return {
      errors: {
        email: ["Invalid email"],
      },
    };
  }

  if (username !== testUser.username) {
    return {
      errors: {
        username: ["Invalid username"],
      },
    };
  }

  if (password !== testUser.password) {
    return {
      errors: {
        password: ["Incorrect password"],
      },
    };
  }

  await createSession(testUser.username);

  redirect("../../dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/signin");
}
