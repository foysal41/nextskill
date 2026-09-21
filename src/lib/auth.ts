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

const client = new MongoClient(process.env.MONGO_DB_URI);

const db = client.db(process.env.AUTH_DB_NAME);

// console.log("MONGO URI EXISTS:", !!process.env.MONGO_DB_URI);
// console.log("AUTH DB NAME:", process.env.AUTH_DB_NAME);

client
  .connect()
  .then(async () => {
    await db.command({ ping: 1 });
    // console.log("✅ MONGODB CONNECTED");
    // console.log("✅ DATABASE:", db.databaseName);
  })
  .catch((error) => {
    console.error("❌ MONGODB CONNECTION ERROR:");
    console.error(error);
  });

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

  trustedOrigins: [
    "http://localhost:3000",
    "https://nextskill-three.vercel.app",
  ],

  database: mongodbAdapter(db, {
    client,
  }),
});