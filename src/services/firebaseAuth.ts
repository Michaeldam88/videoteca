import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth';

import { firebaseApp } from '../firebaseApp';

const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);
auth.languageCode = 'es';

export const loginFirebase = async () => {
    const response = await signInWithPopup(auth, provider);   
    return response.user;
};

export const logoutFirebase = () => signOut(auth);
