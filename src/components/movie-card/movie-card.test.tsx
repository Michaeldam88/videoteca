import { render, screen } from '@testing-library/react';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    mockMovie1,
    favorites,
    genres,
    user,
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

        describe('When it has genres', () => {
            test('Then should render a tag with it', () => {
                const genreTag = screen.getByRole('heading', {
                    level: 4,
                    name: 'comedia',
                });

                expect(genreTag).toBeInTheDocument();
            });
        });

        // describe('when we click on add/remove favorites', () => {
        //     test('if it is already in favorites then it should remove it', () => {
        //         const openModal = screen.getByRole('heading', {
        //             level: 4,
        //             name: 'comedia',
        //         });

        //         expect(genreTag).toBeInTheDocument();
        //     });
        // });


    });
});


describe('Given a movie-card component without user', () => {
    const MockSetIdDetails = jest.fn();

    const user = null

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
            const addFavoritesBtn = screen.getByRole('heading', {
                level: 4,
                name: '',
            });
            expect(genreTag).toBeInTheDocument();
        });
    });
});
