import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

const nextAuthOptions = {
  providers: [GitHub({
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
  })],
};

export const {
  handlers,
  signIn: nextAuthSignIn,
  signOut: nextAuthSignOut,
  auth,
} = NextAuth(nextAuthOptions);

export async function signIn(...args: Parameters<typeof nextAuthSignIn>) {
  return await nextAuthSignIn(...args);
}

export async function signOut(...args: Parameters<typeof nextAuthSignOut>) {
  return await nextAuthSignOut(...args);
}