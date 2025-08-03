import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtq7OTLyEb5tfyeGOpx5P82GuCYdU-fwM",
  authDomain: "donezo-waitlist.firebaseapp.com",
  projectId: "donezo-waitlist",
  storageBucket: "donezo-waitlist.firebasestorage.app",
  messagingSenderId: "344726245568",
  appId: "1:344726245568:web:c10dba0c84f067c2455d25",
  measurementId: "G-JZJZN6C1VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export default app; 