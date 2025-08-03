import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export interface WaitlistEntry {
  email: string;
  timestamp: Date;
  source?: string; // Optional field to track where the signup came from
}

export async function addToWaitlist(email: string, source?: string): Promise<{ success: boolean; message: string }> {
  try {
    // Check if email already exists
    const emailQuery = query(collection(db, 'waitlist'), where('email', '==', email.toLowerCase()));
    const querySnapshot = await getDocs(emailQuery);
    
    if (!querySnapshot.empty) {
      return {
        success: false,
        message: 'This email is already on the waitlist!'
      };
    }

    // Add new email to waitlist
    const entry: WaitlistEntry = {
      email: email.toLowerCase(),
      timestamp: new Date(),
      source: source || 'website'
    };

    await addDoc(collection(db, 'waitlist'), entry);
    
    return {
      success: true,
      message: 'Successfully added to waitlist!'
    };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return {
      success: false,
      message: 'Failed to add to waitlist. Please try again.'
    };
  }
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const querySnapshot = await getDocs(collection(db, 'waitlist'));
    return querySnapshot.size;
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    return 0;
  }
} 