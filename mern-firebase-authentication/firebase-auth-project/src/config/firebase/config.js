// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyAG2p_8v70e0FinyujRheJokty9MqpW3U4',
    authDomain: 'reactjsauth-3f642.firebaseapp.com',
    projectId: 'reactjsauth-3f642',
    storageBucket: 'reactjsauth-3f642.firebasestorage.app',
    messagingSenderId: '130833988239',
    appId: '1:130833988239:web:c9198a2cf90d4fcab0cefa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
