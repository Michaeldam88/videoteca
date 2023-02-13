import { act, renderHook } from '@testing-library/react';
import { user } from '../mocks/testing.hookMock';

import { loginFirebase, logoutFirebase } from '../services/firebaseAuth';
import { useFirebase } from './use.Firebase';

jest.mock('../services/firebaseAuth', () => ({
    loginFirebase: jest.fn(),
    logoutFirebase: jest.fn(),
}));

(loginFirebase as jest.Mock).mockResolvedValue(user);

describe(`Given useMovies (custom hook)
            render with a virtual component`, () => {
    const { result } = renderHook(() => useFirebase());
    describe(`When the api is working`, () => {
        test('Then clicking the login btn should call the function loginFirebase', async () => {
            await act(() => result.current.login());
            expect(loginFirebase).toHaveBeenCalled();
        });

        test('Then clicking the logout btn should call the function logoutFirebase', async () => {
            await act(() => result.current.logout());
            expect(logoutFirebase).toHaveBeenCalled();
        });
    });

    
});
