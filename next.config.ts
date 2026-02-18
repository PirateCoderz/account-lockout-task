import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DB_URI: "mongodb+srv://hahmad7271_db_user:Oru4QEq8pQ5KWjy9@innovex.jknggnp.mongodb.net/account-lockout?retryWrites=true&w=majority",
    DB_USER: "hahmad7271_db_user",
    DB_PASS: "Oru4QEq8pQ5KWjy9",
    NEXTAUTH_SECRET: "account-lockout-secret-key-2026",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

export default nextConfig;
