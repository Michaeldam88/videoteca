import { renderHook } from '@testing-library/react';
import { user } from '../mocks/testing.hookMock';

import { loginFirebase, logoutFirebase } from '../services/firebaseAuth';
import { useFirebase } from './use.Firebase';

import { useLocalStorage } from './use.LocalStorage';

jest.mock('./use.LocalStorage');
jest.mock('../services/firebaseAuth');

(useLocalStorage as jest.Mock).mockImplementation(() => {
    return {
        getItem: () => {
            return '{"uid":"pI9hYahFETjQbQZ0i6EAXS72","email":"xxx@gmail.com"}';
        },
        setItem: jest.fn(),
    };
});

describe(`Given useMovies (custom hook)`, () => {
    const { result } = renderHook(() => useFirebase());

    beforeEach(() => {
        (loginFirebase as jest.Mock).mockResolvedValue(user);
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

describe(`Given useMovies (custom hook) when the response of user is wrong`, () => {
    const { result } = renderHook(() => useFirebase());

    beforeEach(() => {
        (loginFirebase as jest.Mock).mockResolvedValue(null);
        jest.clearAllMocks();
    });

    describe(`When the api is working`, () => {
        test('Then clicking the login btn should call the function loginFirebase', async () => {
            await result.current.login();
            expect(loginFirebase).toHaveBeenCalled();
        });
    });
});
