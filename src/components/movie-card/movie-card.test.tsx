import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    mockMovie1,
    favorites,
    genres,
    user,
    mockMovie2,
} from '../../mocks/testing.hookMock';
import { MovieCard } from './movie-card';

describe('Given a movie-card component with user logged', () => {
    const MockSetIdDetails = jest.fn();

    beforeEach(() => {
        const mockContext = {
            genres,
            user,
            favorites,
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <MovieCard movie={mockMovie1} setIdDetails={MockSetIdDetails} />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        test('Then its should render also with its image', () => {
            const img = screen.getByRole('img');
            expect(img).toBeInTheDocument();
        });
    });

    describe('When it has genres', () => {
        test('Then should render a tag with it', () => {
            const genreTag = screen.getByRole('heading', {
                level: 4,
                name: 'comedia',
            });

            expect(genreTag).toBeInTheDocument();
        });
    });

    describe('When we click remove favorites', () => {
        test('Then it should open a pop-up telling you that is removed', () => {
            const removeFavoritesBtn = screen.getByRole('button', {
                name: 'star',
            });
            userEvent.click(removeFavoritesBtn);
            const removedMsg = screen.getByText('¡Quitado de tus favoritos!');
            expect(removedMsg).toBeInTheDocument();
        });
    });

    describe('When the msg pop-up is open', () => {
        test('Then if we click anywhere a part of the close button should not do anything', () => {
            const removeFavoritesBtn = screen.getByRole('button', {
                name: 'star',
            });
            userEvent.click(removeFavoritesBtn);
            const removedMsg = screen.getByText('¡Quitado de tus favoritos!');
            expect(removedMsg).toBeInTheDocument();

            const clickaway = screen.getByRole('heading', {
                level: 4,
                name: 'comedia',
            });
            userEvent.click(clickaway);
            expect(removedMsg).toBeInTheDocument();
        });

        test('Then if we click on the close button it should close it', () => {
            const removeFavoritesBtn = screen.getByRole('button', {
                name: 'star',
            });
            userEvent.click(removeFavoritesBtn);
            const removedMsg = screen.getByText('¡Quitado de tus favoritos!');
            expect(removedMsg).toBeInTheDocument();

            const closeBtn = screen.getByRole('button', { name: 'Close' });
            userEvent.click(closeBtn);
            expect(removedMsg).not.toBeInTheDocument();
        });
    });

    describe('When we click the open modal button', () => {
        test('Then it should open a modal', async () => {
            const openModal = screen.getByRole('heading', {
                level: 4,
                name: 'comedia',
            });
            await userEvent.click(openModal);
            const detailModal = screen.getByText('texto del modal');
            await expect(detailModal).toBeInTheDocument();
        });
    });
});

describe('Given a movie-card component with a no favorites movie', () => {
    const MockSetIdDetails = jest.fn();

    beforeEach(() => {
        const mockContext = {
            genres,
            user,
            favorites,
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <MovieCard movie={mockMovie2} setIdDetails={MockSetIdDetails} />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        describe('When we click add favorites', () => {
            test('Then it should open a pop-up telling you that is added', () => {
                const addFavoritesBtn = screen.getByRole('button', {
                    name: 'star',
                });
                userEvent.click(addFavoritesBtn);
                const addedMsg = screen.getByText('¡Añadido a tus favoritos!');
                expect(addedMsg).toBeInTheDocument();
            });
        });
    });
});

describe('Given a movie-card component without user', () => {
    const MockSetIdDetails = jest.fn();

    const user = null;

    beforeEach(() => {
        const mockContext = {
            genres,
            user,
            favorites,
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <MovieCard movie={mockMovie1} setIdDetails={MockSetIdDetails} />
            </MovieContext.Provider>
        );
    });

    describe('When we click to add favorites', () => {
        test('Then it should open a pop-up telling you need to login before', () => {
            const addFavoritesBtn = screen.getByRole('button', {
                name: 'star',
            });
            userEvent.click(addFavoritesBtn);
            const loginBeforeMsg = screen.getByText(
                'Para guardar tus favoritos logueate primero'
            );
            expect(loginBeforeMsg).toBeInTheDocument();
        });
    });
});
