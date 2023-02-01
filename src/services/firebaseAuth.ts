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

export const login = async () => {
    const response = await signInWithPopup(auth, provider);
    console.log(response.user);
    return response.user;
};

export const logout = () => signOut(auth);
