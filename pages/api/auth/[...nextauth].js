import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "14f6c665be4f7f07f62e",
      clientSecret: "d6923ede0b2eb9ef074c24cefc2033d524439549",
    }),
  ],
  secret: "qwer1234",
};
export default NextAuth(authOptions);
