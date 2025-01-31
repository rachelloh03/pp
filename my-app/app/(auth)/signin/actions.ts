"use server";
import { z } from "zod";
// import { createSession, deleteSession } from "../../../lib/session";
import { redirect } from "next/navigation";
import axios from "axios";

// const testUser = {
//   username: "test",
//   password: "password",
//   email: "test@email.com",
// };

const schemaRegister = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

let users: Array<{
  id: number;
  username: string;
  password: string;
  email: string;
}> = [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  try {
    const response = await axios.get("http://localhost:8080/api/user");
    users = response.data.data;
    console.log("users: ", users);
  } catch (error) {
    console.log(error);
  }

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (
      user.username === validatedFields.data.username &&
      user.password === validatedFields.data.password &&
      user.email === validatedFields.data.email
    ) {
      // console.log("user: ", user);
      return user;
    }
  }

  // await createSession(validatedFields.data.username);

  // check if user exists
  // try {
  //   const response = await axios.get("http://localhost:8080/api/user/", {
  //     params: { id: id },
  //   });
  //   return response.data;
  // } catch (error) {
  //   return error;
  // }

  // redirect("../../dashboard");

  // need to change this to check any user, not just testUser
  // if (email !== testUser.email) {
  //   return {
  //     errors: {
  //       email: ["Invalid email"],
  //     },
  //   };
  // }

  // if (username !== testUser.username) {
  //   return {
  //     errors: {
  //       username: ["Invalid username"],
  //     },
  //   };
  // }

  // if (password !== testUser.password) {
  //   return {
  //     errors: {
  //       password: ["Incorrect password"],
  //     },
  //   };
  // }
}

export async function logout() {
  // await deleteSession();
  redirect("/signin");
}
