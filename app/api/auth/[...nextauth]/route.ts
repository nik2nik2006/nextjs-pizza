import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from "@/prisma/prisma-client";
import {compare} from "bcrypt";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    role: 'USER' as UserRole,
                }
            }
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text'},
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                const values = {
                    email: credentials.email,
                }

                const findUser = await prisma.user.findFirst({
                    where: values,
                })

                if (!findUser) {
                    return null;
                }

                const isPasswordValid = await compare(credentials.password, findUser.password)

                if (!isPasswordValid) {
                    return null;
                }

                if (!findUser.verified) {
                    return null;
                }

                return {
                    id: String(findUser.id),
                    email: findUser.email,
                    name: findUser.name,
                    role: findUser.role,
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({ user, account }) {
            try{
                if (account?.provider === 'credentials') {
                    return true;
                }

                if (!user.email) {
                    return false;
                }

                const findUser = await prisma.user.findFirst({
                    where: {
                        OR: [
                            { provider: account?.provider, providerId: account?.providerAccountId },
                            { email: user.email},
                        ]

                    }
                })
            } catch (error) {
                console.log('Error [SIGNIN]', error);
                return false;
            }
        },

        async jwt({ token }) {
            const findUser = await prisma.user.findFirst({
                where: {
                    email: token.email,
                }
            });

            if (findUser) {
                token.id = String(findUser.id);
                token.email = findUser.email;
                token.fullname = findUser.fullname;
                token.role = findUser.role;
            }

            return token;
        },

        session({ session, token}) {
            if (session?.user) {
                session.user.id = token.id;
                session.user.role = token.role;
            }

            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}