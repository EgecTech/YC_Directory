'use server';

import { redirect } from "next/navigation";

export async function signIn() {
  const searchParams = new URLSearchParams({
    callbackUrl: "/",
    provider: "github"
  });
  redirect(`/api/auth/signin?${searchParams.toString()}`);
}

export async function signOut() {
  redirect("/api/auth/signout?callbackUrl=/");
} 