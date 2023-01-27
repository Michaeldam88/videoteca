import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { firebaseApp } from '../firebaseApp';

const auth = getAuth(firebaseApp);

export const login = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        user_type: 'public-user',
    });
    const result = await signInWithPopup(auth, provider);
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential?.idToken;
    //console.log(credential);
    //console.log(token);
    alert(`Bienvenido ${result.user.displayName}`)

    
}
export const exit = signOut(auth);
