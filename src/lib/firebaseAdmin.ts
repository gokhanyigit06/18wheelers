import * as admin from 'firebase-admin';

const serviceAccount = require('../../wheelers-1179d-firebase-adminsdk-fbsvc-1db4958acd.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://wheelers-1179d.firebaseio.com" // You can omit this if you only use Firestore
    });
}

const adminAuth = admin.auth();
const adminDb = admin.firestore();
const adminStorage = admin.storage();

export { adminAuth, adminDb, adminStorage };
