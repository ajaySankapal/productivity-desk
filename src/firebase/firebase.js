import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBWBTLJadHM7ShUDL86OCk6WaBfNbIdZlo',
  authDomain: 'select-d389a.firebaseapp.com',
  projectId: 'select-d389a',
  storageBucket: 'select-d389a.appspot.com',
  messagingSenderId: '965509538880',
  appId: '1:965509538880:web:1eec7ddfd8afd3d491aba5',
  measurementId: 'G-SCBVBLDPRF',
  // apiKey: "AIzaSyBti7lia_haWj4r5dMxPtvrt6TG_T9qiss",
  // authDomain: "productivity-desk.firebaseapp.com",
  // projectId: "productivity-desk",
  // storageBucket: "productivity-desk.appspot.com",
  // messagingSenderId: "640410957431",
  // appId: "1:640410957431:web:69e9f6217649f8580f3872",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { db, auth, provider }
