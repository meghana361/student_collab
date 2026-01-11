
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEyCw2hi5u5BZqdaC0pQRtLhQeI1KZZCw",
  authDomain: "ai-blog-app-9687b.firebaseapp.com",
  projectId: "ai-blog-app-9687b",
  storageBucket: "ai-blog-app-9687b.firebasestorage.app",
  messagingSenderId: "912071793832",
  appId: "1:912071793832:web:136709394dc18fae84f69d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// ✅ THIS EXPORT WAS MISSING
export const auth = getAuth(app);