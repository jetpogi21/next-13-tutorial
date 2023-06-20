import sequelize from "@/config/db";
import SequelizeAdapter from "@auth/sequelize-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import loginSchema from "@/schema/login";
import { User } from "@/models/UserModel";
import { compare } from "bcryptjs";
import { Op } from "sequelize";
import { nanoid } from "nanoid";

const adapter = SequelizeAdapter(sequelize, { synchronize: false }) as Adapter;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("Invalid call.");
        }

        try {
          await loginSchema.validate(credentials);
        } catch (error: any) {
          throw new Error(error.message);
        }

        const { emailOrUsername, password } = credentials;

        const user = await User.findOne({
          where: {
            [Op.or]: [{ email: emailOrUsername }, { name: emailOrUsername }],
          },
        });

        if (!user) {
          throw new Error("Invalid email/username or password.");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
          throw new Error("Invalid email/username or password.");
        }

        return user.toJSON();
      },
      credentials: {
        emailOrUsername: { label: "Username or Email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await User.findOne({
        where: {
          email: token.email!,
        },
      });

      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      if (!dbUser.username) {
        await User.update(
          {
            username: nanoid(10),
          },
          {
            where: {
              id: dbUser.id,
            },
          }
        );
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        username: dbUser.username,
      };
    },
  },
  adapter,
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

export const getAuthSession = () => getServerSession(authOptions);
