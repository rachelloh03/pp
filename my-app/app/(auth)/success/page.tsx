"use client";

import Link from "next/link";

export default function Success() {
  return (
    <div>
      <p>Account successfully created!</p>
      <p>We&#39;re so glad you&#39;re here.</p>
      <Link
        className="underline ml-2 flex flex-col items-center justify-center"
        href="signin"
      >
        Sign In
      </Link>
    </div>
  );
}
