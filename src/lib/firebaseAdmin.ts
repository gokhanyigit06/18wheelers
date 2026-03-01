import * as admin from 'firebase-admin';

// Helper to Safely load service account
const getServiceAccount = () => {
    // 1. Try Environment Variable (Standard for Deployment)
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        try {
            return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
        } catch (e) {
            console.error("FIREBASE_SERVICE_ACCOUNT env var exists but is not valid JSON");
        }
    }

    // 2. Try Local File (Development only)
    // We use a try-catch because the file is gitignored
    try {
        // We use a dynamic path to avoid Turbopack failing the build if the file is missing
        const relativePath = '../../wheelers-1179d-firebase-adminsdk-fbsvc-1db4958acd.json';
        return require(relativePath);
    } catch (e) {
        // This is expected in production if FIREBASE_SERVICE_ACCOUNT is used instead
        return null;
    }
};

const serviceAccount = getServiceAccount();

if (!admin.apps.length && serviceAccount) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    } catch (error) {
        console.error("Firebase Admin initialization error:", error);
    }
}

export const adminAuth = admin.apps.length ? admin.auth() : null;
export const adminDb = admin.apps.length ? admin.firestore() : null;
export const adminStorage = admin.apps.length ? admin.storage() : null;
