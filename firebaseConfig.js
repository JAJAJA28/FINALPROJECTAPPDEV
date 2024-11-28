import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7IJPE2XluQcUkyVVLec1cQ9QgIi05DEo",
  authDomain: "fir-integration-c5c15.firebaseapp.com",
  databaseURL: "https://fir-integration-c5c15-default-rtdb.firebaseio.com/",
  projectId: "fir-integration-c5c15",
  storageBucket: "fir-integration-c5c15.appspot.com",
  messagingSenderId: "15165598608",
  appId: "1:15165598608:web:4eefe8ec73922610306115",
  measurementId: "G-PVYN0KBZSS",
};

// Initialize Firebase App
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
