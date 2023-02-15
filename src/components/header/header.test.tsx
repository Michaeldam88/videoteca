import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    getPopularMovies,
    login,
    logout,
    setActiveOperation,
    setPage,
    user,
} from '../../mocks/testing.hookMock';
import { Header } from './header';

describe('Given a header component with user logged', () => {
    beforeEach(async () => {
        const mockContext = {
            getPopularMovies,
            setPage,
            setActiveOperation,
            logout,
            login,
            user,
        } as unknown as MovieContextStructure;
        await render(
            <BrowserRouter>
                <MovieContext.Provider value={mockContext}>
                    <Header />
                </MovieContext.Provider>
            </BrowserRouter>
        );
    });

    describe('When it has been rendered', () => {
        test('Then its should render also with its icon', () => {
            const filmBtn = screen.getByRole('button', { name: 'theaters' });
            expect(filmBtn).toBeInTheDocument();
        });
    });

    describe('When we click to home', () => {
        test('Then its should call t he function setPage', async () => {
            const filmBtn = screen.getByRole('button', { name: 'theaters' });
            userEvent.click(filmBtn);
            expect(setPage).toHaveBeenCalled();
        });
    });

    describe('When we click to logout', () => {
        test('it shoul call the function logout', () => {
            const logoutBtn = screen.getByRole('button', {
                name: 'logout',
            });
            userEvent.click(logoutBtn);
            expect(logout).toHaveBeenCalled();
        });
    });

    test('Then if we click on the close button it should close it', async () => {
        const logoutBtn = screen.getByRole('button', {
            name: 'logout',
        });
        userEvent.click(logoutBtn);
        const closeBtn = screen.getByTitle('Close');
        userEvent.click(closeBtn);
        await waitFor(() => {
            expect(closeBtn).not.toBeInTheDocument();
        });
    });
});

describe('Given a header component with user not logged', () => {
    beforeEach(async () => {
        const mockContext = {
            getPopularMovies,
            setPage,
            setActiveOperation,
            logout,
            login,
            user: null,
        } as unknown as MovieContextStructure;
        await render(
            <BrowserRouter>
                <MovieContext.Provider value={mockContext}>
                    <Header />
                </MovieContext.Provider>
            </BrowserRouter>
        );
    });

    describe('When we click to login favorites', () => {
        test('Then after we logged should give you a welcome', async () => {
            const loginBtn = screen.getByRole('button', {
                name: 'person',
            });
            userEvent.click(loginBtn);
            await waitFor(() => {
                expect(login).toHaveBeenCalled();
            });
        });
    });
});

describe('Given a header component with user logged with no name and photo', () => {
    beforeEach(async () => {
        const mockContext = {
            getPopularMovies,
            setPage,
            setActiveOperation,
            logout,
            login,
            user: { ...user, displayName: '', photoURL: '' },
        } as unknown as MovieContextStructure;
        await render(
            <BrowserRouter>
                <MovieContext.Provider value={mockContext}>
                    <Header />
                </MovieContext.Provider>
            </BrowserRouter>
        );
    });

    describe('When it has been rendered', () => {
        test('Then its should render without name and photo', () => {
            const filmBtn = screen.getByRole('button', { name: 'theaters' });
            expect(filmBtn).toBeInTheDocument();
        });
    });
});
