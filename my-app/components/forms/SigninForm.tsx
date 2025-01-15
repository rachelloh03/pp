"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signin } from "@/app/(auth)/signin/actions";

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
  console.log(formState, "client");
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
              />
              {formState?.errors?.username && (
                <p className="text-pink-500 text-xs italic mt-1 py-2">
                  {formState.errors.username}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="email" />
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
              />
              {formState?.errors?.password && (
                <p className="text-pink-500 text-xs italic mt-1 py-2">
                  {formState.errors.password}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="w-full">Sign In</button>
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
