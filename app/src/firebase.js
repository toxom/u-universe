// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase';



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
  const analytics = getAnalytics(app);

  export const firestore = app.firestore();
