import NextAuth from "next-auth"; 
import { db } from "./db"; 
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if(!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET){
    throw new Error('Missing github oauth credentials')
}

export const { 
    auth,
    signOut,
    signIn, 
    handlers: {GET, POST}
} = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        GithubProvider({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({session, user}: any){
            if(session && user) {
                session.user.id = user.id;
            }
            return session
        }
    }
})