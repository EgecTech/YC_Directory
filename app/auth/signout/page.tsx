import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/auth"

export default async function SignOut() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Sign out
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 