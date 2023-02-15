import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    disliked,
    liked,
    mockMovie1,
    mockMovie2,
    user,
    watched,
} from '../../mocks/testing.hookMock';
import { FavoritesCard } from './favorites-card';

import {
    deleteLikedMovie,
    writeLikedMovie,
    deleteDislikedMovie,
    writeDislikedMovie,
} from '../../services/firebaseStorage';

jest.mock('../../services/firebaseStorage', () => {
    return {
        deleteFavoritesMovie: jest.fn(),
        deleteWatchedMovie: jest.fn(),
        writeFavoritesMovie: jest.fn(),
        writeWatchedMovie: jest.fn(),
        deleteLikedMovie: jest.fn(),
        writeLikedMovie: jest.fn(),
        deleteDislikedMovie: jest.fn(),
        writeDislikedMovie: jest.fn(),
    };
});

describe('Given a movie-card component with user logged', () => {
    const MockSetIdDetails = jest.fn();

    beforeEach(() => {
        const mockContext = {
            user,
            watched,
            liked,
            disliked,
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <FavoritesCard
                    movie={mockMovie1}
                    setIdDetails={MockSetIdDetails}
                />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        test('Then its should render also with its image', () => {
            const img = screen.getByRole('img');
            expect(img).toBeInTheDocument();
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

    describe('When we click remove watched', () => {
        test('Then it should open a pop-up telling you that is removed', () => {
            const removeFavoritesBtn = screen.getByRole('button', {
                name: 'visibility',
            });
            userEvent.click(removeFavoritesBtn);
            const removedMsg = screen.getByText('!Marcado como no visto!');
            expect(removedMsg).toBeInTheDocument();
        });

        test('Then if we click on the close button it should close it', async () => {
            const removeFavoritesBtn = screen.getByRole('button', {
                name: 'visibility',
            });
            userEvent.click(removeFavoritesBtn);
            const removedMsg = screen.getByText('!Marcado como no visto!');
            const closeBtn = screen.getByTitle('Close');
            userEvent.click(closeBtn);
            await waitFor(() => {
                expect(removedMsg).not.toBeInTheDocument();
            });
        });
    });

    describe('When we click remove liked', () => {
        test('Then it should open a pop-up telling you that is removed', () => {
            const removeLikedBtn = screen.getAllByRole('button', {
                name: 'recommend',
            });
            userEvent.click(removeLikedBtn[1]);
            expect(deleteLikedMovie).toHaveBeenCalled();
        });
    });

    describe('When we click remove disliked', () => {
        test('Then it should open a pop-up telling you that is removed', () => {
            const removeDislikedBtn = screen.getAllByRole('button', {
                name: 'recommend',
            });
            userEvent.click(removeDislikedBtn[0]);
            expect(deleteDislikedMovie).toHaveBeenCalled();
        });
    });

    describe('When we click the open modal button', () => {
        test('Then it should open a modal', () => {
            const openModal = screen.getByRole('heading', {
                level: 3,
                name: '2022',
            });
            userEvent.click(openModal);
            expect(MockSetIdDetails).toHaveBeenCalled();
        });
    });
});

describe('Given a movie-card component with user logged and the movie is not liked,disliked and watched', () => {
    const MockSetIdDetails = jest.fn();

    beforeEach(() => {
        const mockContext = {
            user,
            watched,
            liked,
            disliked,
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <FavoritesCard
                    movie={mockMovie2}
                    setIdDetails={MockSetIdDetails}
                />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        describe('When we click add watched', () => {
            test('Then it should open a pop-up telling you that is watched', () => {
                const addWatchedBtn = screen.getByRole('button', {
                    name: 'visibility',
                });
                userEvent.click(addWatchedBtn);
                const addedMsg = screen.getByText('¡Marcado como visto!');
                expect(addedMsg).toBeInTheDocument();
            });
        });
    });

    describe('When we click liked', () => {
        test('Then it should open a pop-up telling you that is removed', () => {
            const addLikedBtn = screen.getAllByRole('button', {
                name: 'recommend',
            });
            userEvent.click(addLikedBtn[1]);
            expect(writeLikedMovie).toHaveBeenCalled();
        });
    });

    describe('When we click disliked', () => {
        test('Then it should open a pop-up telling you that is removed', () => {
            const addDislikedBtn = screen.getAllByRole('button', {
                name: 'recommend',
            });
            userEvent.click(addDislikedBtn[0]);
            expect(writeDislikedMovie).toHaveBeenCalled();
        });
    });
});

describe('Given a movie-card component without user', () => {
    const MockSetIdDetails = jest.fn();

    const user = null;

    beforeEach(() => {
        const mockContext = {
            user,
            watched,
            liked,
            disliked,
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <FavoritesCard
                    movie={mockMovie1}
                    setIdDetails={MockSetIdDetails}
                />
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
