import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

if (!process.env.MONGO_DB_URI) {
  throw new Error("MONGO_DB_URI is missing");
}

if (!process.env.AUTH_DB_NAME) {
  throw new Error("AUTH_DB_NAME is missing");
}

// =====================================
// MongoDB Client
// =====================================

const client = new MongoClient(
  process.env.MONGO_DB_URI,
  {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 10000,
  }
);

const db = client.db(
  process.env.AUTH_DB_NAME
);

// =====================================
// Better Auth
// =====================================

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  // ==============================
  // USER ROLES
  // ==============================

  user: {
    additionalFields: {
      role: {
        type: ["student", "instructor"],
        required: false,
        defaultValue: "student",
        input: true,
      },
    },
  },

  // ==============================
  // TRUSTED ORIGINS
  // ==============================

  trustedOrigins: [
    "http://localhost:3000",
    "https://nextskill-three.vercel.app",
  ],

  // ==============================
  // DATABASE
  // ==============================

  database: mongodbAdapter(db, {
    client,
  }),
});