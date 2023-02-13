import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth';

import { firebaseApp } from '../firebaseApp';

const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);

export const loginFirebase = async () => {
    try {
        const response = await signInWithPopup(auth, provider);
        return response.user;
    } catch {}
};

export const logoutFirebase = () => signOut(auth);
