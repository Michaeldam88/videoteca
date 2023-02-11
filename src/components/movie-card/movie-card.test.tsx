import { render, screen, waitFor } from '@testing-library/react';
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

jest.mock('../../services/firebaseStorage', () => {
    return {
        deleteFavoritesMovie: jest.fn(),
        writeFavoritesMovie: jest.fn(),
    };
});

describe('Given a movie-card component with user logged', () => {
    const MockSetIdDetails = jest.fn();

    beforeEach(async () => {
        const mockContext = {
            genres,
            user,
            favorites,
        } as unknown as MovieContextStructure;
        await render(
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

        test('Then if we click on the close button it should close it', async () => {
            const removeFavoritesBtn = screen.getByRole('button', {
                name: 'star',
            });
            userEvent.click(removeFavoritesBtn);
            const removedMsg = screen.getByText('¡Quitado de tus favoritos!');
            const closeBtn = screen.getByTitle('Close');
            userEvent.click(closeBtn);
            await waitFor(() => {
                expect(removedMsg).not.toBeInTheDocument();
            });
        });
    });

    describe('When we click the open modal button', () => {
        test('Then it should open a modal', () => {
            const openModal = screen.getByRole('heading', {
                level: 4,
                name: 'comedia',
            });
            userEvent.click(openModal);
            expect(MockSetIdDetails).toHaveBeenCalled();
        });
    });
});

describe('Given a movie-card component with a not favorites movie', () => {
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
