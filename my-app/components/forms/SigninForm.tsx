"use client";

import Link from "next/link";
import { useActionState, MouseEvent, useState } from "react";
import { signin } from "@/app/(auth)/signin/actions";
import { redirect } from "next/navigation";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};

export function SigninForm() {
  const [formState, formAction] = useActionState(signin, INITIAL_STATE);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // console.log(formState);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    // console.log("formState: ", formState);
    if (formData.username !== null) {
      // console.log("here: ", formData.username);
      redirect(`../dashboard/[${formData.username}]`);
    } else {
      console.log("formData.username is null");
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="username"
                onChange={handleChange}
              />
              {formState?.errors?.username && (
                <p className="text-pink-500 text-xs italic mt-1 py-2">
                  {formState.errors.username}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                onChange={handleChange}
              />
              {formState?.errors?.email && (
                <p className="text-pink-500 text-xs italic mt-1 py-2">
                  {formState.errors.email}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
              />
              {formState?.errors?.password && (
                <p className="text-pink-500 text-xs italic mt-1 py-2">
                  {formState.errors.password}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="w-full" onClick={handleClick}>
              Sign In
            </button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          New to Barbell Bunny?
          <Link className="underline ml-2" href="signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
