import * as admin from 'firebase-admin';

const getServiceAccount = () => {
    // 1. Try environment variable (Standard for deployment)
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        try {
            return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
        } catch (e) {
            console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT env var");
        }
    }

    // 2. Fallback to local JSON (Development)
    try {
        return require('../../wheelers-1179d-firebase-adminsdk-fbsvc-1db4958acd.json');
    } catch (e) {
        console.warn("Firebase service account JSON not found. Ensure FIREBASE_SERVICE_ACCOUNT env var is set.");
        return null;
    }
};

const serviceAccount = getServiceAccount();

if (!admin.apps.length && serviceAccount) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const adminAuth = admin.auth();
const adminDb = admin.firestore();
const adminStorage = admin.storage();

export { adminAuth, adminDb, adminStorage };
