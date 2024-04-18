// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// import { getFirestore, addDoc, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREABSE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// const db = getFirestore(app);

export const signUpWithEmailPassword = async (formData: { email: string; password: string }) => {
  const email = formData.email;
  const password = formData.password;

  console.log(email, password);

  try {
    const userCredentails = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentails.user);
  } catch (e) {
    console.log(e);
  }
};

export const signInWithEmailPassword = async (loginDetails: {
  email: string;
  password: string;
}) => {
  const email = loginDetails.email;
  const password = loginDetails.password;

  try {
    const userCredentails = await signInWithEmailAndPassword(auth, email, password);

    console.log(userCredentails);
  } catch (e) {
    console.log(e);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("UID", user.uid);
    console.log("EMAIL", user.email);
  }
});

export const lolUser = auth.currentUser;

// const addData = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "products"), {
//       name: "Product 1",
//       description: "This is very cool product",
//       price: 220,
//     });

//     console.log("Document created with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document:", e);
//   }
// };

// addData();
