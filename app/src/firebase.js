// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Import addDoc



const firebaseConfig = {
    apiKey: "AIzaSyDhbvqar9DUQjDqbjTpztmOuMKz0OS8Bg8",
    authDomain: "u-universe.firebaseapp.com",
    projectId: "u-universe",
    storageBucket: "u-universe.appspot.com",
    messagingSenderId: "769321973541",
    appId: "1:769321973541:web:c12af142520d7cddcecccc",
    measurementId: "G-GVR4D9F52B"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a subscription to the Firestore collection
const addSubscription = async (email) => {
  try {
    // Add a new document with a generated ID
    const docRef = await addDoc(collection(db, 'subscriptions'), {
      email: email,
      timestamp: serverTimestamp(),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const addExpertSubmission = async (data) => {
  try {
    // Add a new document with a generated ID to the "experts" collection
    const docRef = await addDoc(collection(db, 'experts'), {
      // Add the data specific to expert submissions
      firstName: data.firstName,
      lastName: data.lastName,
      organization: data.organization,
      position: data.position,
      country: data.country,
      
      // Add any other fields relevant to expert submissions
      timestamp: serverTimestamp(),
    });
    console.log('Expert Submission written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding Expert Submission: ', e);
  }
};

export { addSubscription, addExpertSubmission };
