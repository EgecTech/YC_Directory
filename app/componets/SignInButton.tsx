'use client'

import { signIn } from "next-auth/react"

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn("github", { callbackUrl: '/' })}
      className="hover:text-gray-600 transition-colors"
    >
      Login
    </button>
  )
} 