import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  
  return (
    <header className="px-5 py-3 by-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={144} height={30} alt={"Logo "} />
        </Link>

        <div className="flex items-center gap-5">
          {session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <SignOutButton />
              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
