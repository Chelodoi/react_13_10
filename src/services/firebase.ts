// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { getDatabase, ref } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlzHQFTjrqkkOqoLsGkIFuV8a090KQpro',
  authDomain: 'react-gb-34d5f.firebaseapp.com',
  projectId: 'react-gb-34d5f',
  storageBucket: 'react-gb-34d5f.appspot.com',
  messagingSenderId: '351531923304',
  appId: '1:351531923304:web:e5bd26de05fb8a17a9c8dd',
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

export const auth = getAuth(firebase)

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password)

export const login = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password)

export const logout = async () => await signOut(auth)

const db = getDatabase(firebase)

export const userRef = ref(db, 'user')
export const chatsRef = ref(db, 'chats')

export const getChatById = (id: string) => ref(db, `chats/${id}`)
export const getMessagesById = (chatId: string) =>
  ref(db, `chats/${chatId}/messageList/`)
