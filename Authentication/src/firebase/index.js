import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";;
const firebaseConfig = {
  apiKey: "AIzaSyD4HpUMrHYfUFpP0_gwyeP6c-eu9fwAo4s",
  authDomain: "memories-project-30c40.firebaseapp.com",
  projectId: "memories-project-30c40",
  storageBucket: "memories-project-30c40.appspot.com",
  messagingSenderId: "313749848900",
  appId: "1:313749848900:web:ab60c799157b7a228f4d11",
  measurementId: "G-L25C4ZC3XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/**export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
**/