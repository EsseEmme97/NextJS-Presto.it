import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
const checkUser= require("@/utils/checkUsers")

const config= {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        const user = await checkUser(credentials);
        return user;
      },
    }),
  ],
  callbacks:{async redirect(){
    return "/annunci/crea"
  }},
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(config);

export { handler as GET, handler as POST };
export {config}
