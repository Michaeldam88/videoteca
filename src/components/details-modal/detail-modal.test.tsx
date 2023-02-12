import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    user,
    favorites,
    getDetails,
    setDetails,
    details,
    details2,
} from '../../mocks/testing.hookMock';
import { DetailsModal } from './details-modal';

jest.mock('../../services/firebaseStorage', () => {
    return {
        deleteFavoritesMovie: jest.fn(),
        writeFavoritesMovie: jest.fn(),
    };
});

describe('Given a detail-modal component with user logged', () => {
    const MockSetIdDetails = jest.fn();

    beforeEach(() => {
        const mockContext = {
            details,
            user,
            favorites,
            getDetails,
            setDetails,
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <DetailsModal id={899112} setIdDetails={MockSetIdDetails} />
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
            const removeFavoritesBtn = screen.getAllByRole('button', {
                name: 'star',
            });
            userEvent.click(removeFavoritesBtn[0]);
            const removedMsg = screen.getByText('¡Quitado de tus favoritos!');
            expect(removedMsg).toBeInTheDocument();
        });

        test('Then if we click on the close button it should close it', async () => {
            const removeFavoritesBtn = screen.getAllByRole('button', {
                name: 'star',
            });
            userEvent.click(removeFavoritesBtn[0]);
            const removedMsg = screen.getByText('¡Quitado de tus favoritos!');
            const closeBtn = screen.getByTitle('Close');
            userEvent.click(closeBtn);
            await waitFor(() => {
                expect(removedMsg).not.toBeInTheDocument();
            });
        });
    });

    describe('When we click remove favorites in desktop view', () => {
        test('Then it should open a pop-up telling you that is removed', () => {
            const removeFavoritesBtn = screen.getAllByRole('button', {
                name: 'star',
            });
            userEvent.click(removeFavoritesBtn[1]);
            const removedMsg = screen.getByText('¡Quitado de tus favoritos!');
            expect(removedMsg).toBeInTheDocument();
        });

        test('Then if we click on the close button it should close it', async () => {
            const removeFavoritesBtn = screen.getAllByRole('button', {
                name: 'star',
            });
            userEvent.click(removeFavoritesBtn[1]);
            const removedMsg = screen.getByText('¡Quitado de tus favoritos!');
            const closeBtn = screen.getByTitle('Close');
            userEvent.click(closeBtn);
            await waitFor(() => {
                expect(removedMsg).not.toBeInTheDocument();
            });
        });
    });

    describe('When we click the close modal button', () => {
        test('Then it should open a modal', () => {
            const openModal = screen.getByRole('button', {
                name: 'close',
            });
            userEvent.click(openModal);
            expect(MockSetIdDetails).toHaveBeenCalled();
        });
    });
});

describe('Given a detail-modal component with user logged and a movie that is not favorites', () => {
    const MockSetIdDetails = jest.fn();
    const details = details2;

    beforeEach(() => {
        const mockContext = {
            details,
            user,
            favorites,
            getDetails,
            setDetails,
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <DetailsModal id={89911233} setIdDetails={MockSetIdDetails} />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered am we click add favorites', () => {
        test('Then it should open a pop-up telling you that is added', () => {
            const addFavoritesBtn = screen.getAllByRole('button', {
                name: 'star',
            });
            userEvent.click(addFavoritesBtn[0]);
            const addedMsg = screen.getByText('¡Añadido a tus favoritos!');
            expect(addedMsg).toBeInTheDocument();
        });
    });

    describe('When it has been rendered am we click add favorites when we are in desktop view', () => {
        test('Then it should open a pop-up telling you that is added', () => {
            const addFavoritesBtn = screen.getAllByRole('button', {
                name: 'star',
            });
            userEvent.click(addFavoritesBtn[1]);
            const addedMsg = screen.getByText('¡Añadido a tus favoritos!');
            expect(addedMsg).toBeInTheDocument();
        });
    });
});

describe('Given a detail-modal component without user logged', () => {
    const MockSetIdDetails = jest.fn();

    beforeEach(() => {
        const mockContext = {
            details,
            user: null,
            favorites,
            getDetails,
            setDetails,
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <DetailsModal id={899112} setIdDetails={MockSetIdDetails} />
            </MovieContext.Provider>
        );
    });

    describe('When we click to add favorites', () => {
        test('Then it should open a pop-up telling you need to login before', () => {
            const addFavoritesBtn = screen.getAllByRole('button', {
                name: 'star',
            });
            userEvent.click(addFavoritesBtn[0]);
            const loginBeforeMsg = screen.getByText(
                'Para guardar tus favoritos logueate primero'
            );
            expect(loginBeforeMsg).toBeInTheDocument();
        });
    });
});
