import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import clientPromise from '../../../lib/mongodb';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.nickname,
          email: profile.email,
          image: profile.picture,
          userRole: 'user',
        };
      },
    }),
    // GitHubProvider({
    //     clientId: process.env.GITHUB_ID,
    //     clientSecret: process.env.GITHUB_SECRET,
    // }),
    // EmailProvider({
    //     server: {
    //         host: process.env.SMTP_HOST,
    //         port: Number(process.env.SMTP_PORT),
    //         auth: {
    //             user: process.env.SMTP_USER,
    //             pass: process.env.SMTP_PASSWORD,
    //         },
    //     },
    //     from: process.env.SMTP_FROM,
    // }),
    // CredentialsProvider({
    //     // The name to display on the sign in form (e.g. "Sign in with...")
    //     name: "Credentials",
    //     // The credentials is used to generate a suitable form on the sign in page.
    //     // You can specify whatever fields you are expecting to be submitted.
    //     // e.g. domain, username, password, 2FA token, etc.
    //     // You can pass any HTML attribute to the <input> tag through the object.
    //     credentials: {
    //         username: { label: "Username", type: "text", placeholder: "jsmith" },
    //         password: { label: "Password", type: "password" }
    //     },
    //     async authorize(credentials, req) {
    //         // Add logic here to look up the user from the credentials supplied
    //         const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }

    //         return user

    //         // if (user) {
    //         //     // Any object returned will be saved in `user` property of the JWT
    //         //     return user
    //         // } else {
    //         //     // If you return null then an error will be displayed advising the user to check their details.
    //         //     return null

    //         //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    //         // }
    //     },
    // }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      session.id = token.id;
      session.userRole = token.userRole;
      return session;
    },
  },
};
