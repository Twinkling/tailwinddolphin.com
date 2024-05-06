import { NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthConfig = {
    providers: [
      GoogleProvider({
          clientId: process.env.AUTH_GOOGLE_ID,
          clientSecret: process.env.AUTH_GOOGLE_SECRET,
      })
    ],
  }