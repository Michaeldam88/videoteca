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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MovieCard } from '../../components/movie-card/movie-card';

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
