import { initializeApp, getApp, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const admin = getApps().length > 0 ? getApp() : initializeApp({});

// Check if the admin app is already initialized

const adminAuth = getAuth(admin);
const adminFirestore = getFirestore(admin);

export { adminAuth, adminFirestore };
