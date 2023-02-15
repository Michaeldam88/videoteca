/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    filterModal,
    movies,
    page,
    setPage,
    totPages,
} from '../../mocks/testing.hookMock';
import Home from './home';
import { FilterModal } from '../../components/filter-modal/filter-modal';
import { DetailsModal } from '../../components/details-modal/details-modal';
import { MovieCard } from '../../components/movie-card/movie-card';

jest.mock('../../components/filter-modal/filter-modal', () => {
    return {
        FilterModal: () => {
            return <h2>Test Title</h2>;
        },
    };
});

jest.mock('../../components/details-modal/details-modal', () => {
    return {
        DetailsModal: () => {
            return <h2>Test Title</h2>;
        },
    };
});

window.scrollTo = jest.fn();

jest.mock('../../components/movie-card/movie-card');

describe('Given a home component', () => {
    beforeEach(async () => {
        const mockContext = {
            movies,
            filterModal,
            page,
            setPage,
            totPages,
        } as unknown as MovieContextStructure;
        await render(
            <MovieContext.Provider value={mockContext}>
                <Home />
            </MovieContext.Provider>
        );
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    describe('When it has been rendered', () => {
        test('Then if we click on the next page button should call the function setPage', () => {
            const nextPageBtn = screen.getByTitle('Go to next page');
            userEvent.click(nextPageBtn);
            expect(setPage).toHaveBeenCalled();
        });
    });
});

describe('Given a home component with no movies', () => {
    beforeEach(async () => {
        const mockContext = {
            movies: [],
            filterModal,
            page,
            setPage,
            totPages,
        } as unknown as MovieContextStructure;
        await render(
            <MovieContext.Provider value={mockContext}>
                <Home />
            </MovieContext.Provider>
        );
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    describe('When it has been rendered', () => {
        test('Then it should render a message of no movie available', () => {
            const noMovieAvailable = screen.getByText('Sin resultados');

            expect(noMovieAvailable).toBeInTheDocument();
        });
    });
});

describe('Given a home component with a filter modal active', () => {
    beforeEach(async () => {
        const mockContext = {
            movies,
            filterModal: true,
            page,
            setPage,
            totPages,
        } as unknown as MovieContextStructure;
        await render(
            <MovieContext.Provider value={mockContext}>
                <Home />
            </MovieContext.Provider>
        );
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    test('Then if the filter is open we should see his title', () => {
        const filterTitle = screen.getByRole('heading', {
            name: 'Test Title',
        });
        expect(filterTitle).toBeInTheDocument();
    });
});
