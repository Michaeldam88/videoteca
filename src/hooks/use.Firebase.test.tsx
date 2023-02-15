import { render, screen, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe(`Given useMovies (custom hook)`, () => {
    const { result } = renderHook(() => useFirebase());

    describe(`When the api is working`, () => {
        test('Then clicking the login btn should call the function loginFirebase', () => {
            result.current.login();
            expect(loginFirebase).toHaveBeenCalled();
        });

        test('Then clicking the logout btn should call the function logoutFirebase', () => {
            result.current.logout();
            expect(logoutFirebase).toHaveBeenCalled();
        });
    });
});

describe(`Given useMovies (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    let buttons: Array<HTMLElement>;
    beforeEach(() => {
        
        TestComponent = () => {
            const { login } = useFirebase();
            return (
                <>
                    <button onClick={() => login()}>login</button>
                </>
            );
        };
        render(<TestComponent />);
        buttons = screen.getAllByRole('button');
    });

    describe(`When we change the page and the activo operation is filter`, () => {
        test('Then should call the function getFilteredMovies', async () => {
            userEvent.click(buttons[0]);
            //expect(login).toHaveBeenCalled();
        });
    });
});
