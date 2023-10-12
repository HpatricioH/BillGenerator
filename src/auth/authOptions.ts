import { NextAuthOptions } from "next-auth"
import { PrismaAdapter} from "@next-auth/prisma-adapter"
import prisma from "@/app/lib/db/db"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    })
  ],
  adapter: PrismaAdapter(prisma),
}

export default authOptions