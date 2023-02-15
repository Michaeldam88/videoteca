import { signInWithPopup, signOut } from 'firebase/auth';
import { user } from '../mocks/testing.hookMock';
import { loginFirebase, logoutFirebase } from './firebaseAuth';

jest.mock('firebase/auth');

describe('Given the firebase auth service', () => {
    (signInWithPopup as jest.Mock).mockResolvedValue({ response: user });
    test('Then it we call the login function it should call the signInWithPopup function', () => {
        loginFirebase();
        expect(signInWithPopup).toHaveBeenCalled();
    });

    test('Then it we call the logout function it should call the signOut function', () => {
        logoutFirebase();
        expect(signOut).toHaveBeenCalled();
    });
});
