'use client'

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function SignIn() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"
  const error = searchParams.get("error")

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Sign in to your account
          </h2>
          {error && (
            <p className="mt-2 text-center text-sm text-red-600">
              {error === "OAuthSignin" ? "Error starting sign in process" :
               error === "OAuthCallback" ? "Error during sign in" :
               error === "OAuthCreateAccount" ? "Error creating account" :
               error === "EmailCreateAccount" ? "Error creating account" :
               error === "Callback" ? "Error during sign in" :
               error === "OAuthAccountNotLinked" ? "Email already in use with different provider" :
               error === "EmailSignin" ? "Error sending email" :
               error === "CredentialsSignin" ? "Invalid credentials" :
               error === "SessionRequired" ? "Please sign in to access this page" :
               "An error occurred during sign in"}
            </p>
          )}
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex justify-center">
            <button
              onClick={() => signIn("github", { callbackUrl })}
              className="group relative flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 