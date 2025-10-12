import admin from "firebase-admin";
import path from "path";

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  console.log("⚠️ Using local serviceAccountKey.json file");
  const serviceAccount = require("./serviceAccountKey.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  console.log("✅ Using FIREBASE_SERVICE_ACCOUNT from environment");
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
