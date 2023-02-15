import { renderHook } from '@testing-library/react';
import { user } from '../mocks/testing.hookMock';

import { loginFirebase, logoutFirebase } from '../services/firebaseAuth';
import { useFirebase } from './use.Firebase';

import { useLocalStorage } from './use.LocalStorage';
jest.mock('./use.LocalStorage');

(useLocalStorage as jest.Mock).mockImplementation(() => {
    return {
        getItem: () => {
            return '{"uid":"pI9hYahFETjQbQZ0i6EAXS72","email":"xxx@gmail.com"}';
        },
        setItem: jest.fn(),
    };
});

jest.mock('../services/firebaseAuth');

(loginFirebase as jest.Mock).mockResolvedValue(user);

describe(`Given useMovies (custom hook)
            render with a virtual component`, () => {
    const { result } = renderHook(() => useFirebase());

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe(`When the api is working`, () => {
        test('Then clicking the login btn should call the function loginFirebase', async () => {
            await result.current.login();
            expect(loginFirebase).toHaveBeenCalled();
        });

        test('Then clicking the logout btn should call the function logoutFirebase', () => {
            result.current.logout();
            expect(logoutFirebase).toHaveBeenCalled();
        });
    });
});
