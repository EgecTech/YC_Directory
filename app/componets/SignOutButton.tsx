'use client'

import { signOut } from "next-auth/react"

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="hover:text-gray-600 transition-colors"
    >
      LogOut
    </button>
  )
} 