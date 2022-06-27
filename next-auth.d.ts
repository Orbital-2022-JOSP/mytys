import { DefaultSession, DefaultUser } from "next-auth"
import "next-auth/jwt"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            userRole: string;
        } & DefaultSession["user"]
    }

    interface User extends DefaultUser {
        userRole: string;
    }
}
