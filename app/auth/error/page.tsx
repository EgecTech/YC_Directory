import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/auth"
import Link from "next/link"

export default async function ErrorPage() {
  const session = await getServerSession(authOptions)
  
  if (session) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-red-600">
            Authentication Error
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            There was an error during authentication. Please try again.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <Link
            href="/"
            className="group relative flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 