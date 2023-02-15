import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    favorites,
    favoritesList,
    getFavoritesList,
    user,
} from '../../mocks/testing.hookMock';
import Favorites from './favorites';

jest.mock('../../components/favorites-card/favorites-card');

describe('Given a home component', () => {
    beforeEach(async () => {
        const mockContext = {
            user,
            favorites,
            getFavoritesList,
            favoritesList,
        } as unknown as MovieContextStructure;
        await render(
            <MovieContext.Provider value={mockContext}>
                <Favorites />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        test('Then if we click on the next page button should call the function setPage', () => {
            const nextPageBtn = screen.getByTitle('Go to next page');
            userEvent.click(nextPageBtn);
            expect(getFavoritesList).toHaveBeenCalled();
        });
    });
});

describe('Given a home component without favorites movies', () => {
    beforeEach(async () => {
        const mockContext = {
            user,
            favorites: [],
            getFavoritesList,
            favoritesList,
        } as unknown as MovieContextStructure;
        await render(
            <MovieContext.Provider value={mockContext}>
                <Favorites />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        test('Then it should render a message of no movie available', () => {
            const noMovieAvailable = screen.getByText(
                '¡Todavía no tienes películas favoritas!'
            );
            expect(noMovieAvailable).toBeInTheDocument();
        });
    });
});

describe('Given a home component with the user not logged', () => {
    beforeEach(async () => {
        const mockContext = {
            user: null,
            favorites: [],
            getFavoritesList,
            favoritesList,
        } as unknown as MovieContextStructure;
        await render(
            <MovieContext.Provider value={mockContext}>
                <Favorites />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        test('Then it should render a message of login before to see the favorites', () => {
            const noUser = screen.getByText(
                'Haz login para visualizar tus favoritos'
            );
            expect(noUser).toBeInTheDocument();
        });
    });
});
