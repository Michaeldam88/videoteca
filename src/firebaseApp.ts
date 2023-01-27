import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBK_ZFAbIjjs1Oi7x-GalFZZS1zCb07-Zg',
    authDomain: 'videoteca-e0fa1.firebaseapp.com',
    projectId: 'videoteca-e0fa1',
    storageBucket: 'videoteca-e0fa1.appspot.com',
    messagingSenderId: '927680059796',
    appId: '1:927680059796:web:ecbfe171d3d2d8f25a5781',
    measurementId: 'G-FYXW5BYTZ3',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
