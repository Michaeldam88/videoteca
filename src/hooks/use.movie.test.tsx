import {
    act,
    render,
    renderHook,
    screen,
    waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockValidRepoResponse } from '../mocks/testing.hookMock';
import { TmdbApi } from '../services/tmdbApi';
import { useMovies } from './use.movies';

jest.mock('../services/tmdbApi');

TmdbApi.prototype.getGenres = jest.fn();
TmdbApi.prototype.getPopularMovies = jest.fn();
TmdbApi.prototype.getDetails = jest.fn();
TmdbApi.prototype.searchMovie = jest.fn();
TmdbApi.prototype.filterGenre = jest.fn();

describe(`Given useMovies (custom hook)`, () => {
    const { result } = renderHook(() => useMovies());

    describe(`When the api is working`, () => {
        beforeEach(mockValidRepoResponse);

        test('Then clicking the popular btn should call the function getPopularMovies', async () => {
            await act(() => result.current.getPopularMovies(1));
            expect(TmdbApi.prototype.getPopularMovies).toHaveBeenCalled();
        });

        test('Then clicking the details btn should call the function getDetails', async () => {
            await act(() => result.current.getDetails(505642));
            expect(TmdbApi.prototype.getDetails).toHaveBeenCalled();
        });

        test('Then clicking the get favorites btn should call the function getFavorites', async () => {
            await act(() => result.current.getFavoritesList([505642, 505641]));
            expect(TmdbApi.prototype.getDetails).toHaveBeenCalled();
        });

        test('Then clicking the get filtered btn should call the function filterGenre', async () => {
            await act(() => result.current.getFilteredMovies('comedia', 1));
            expect(TmdbApi.prototype.filterGenre).toHaveBeenCalled();
        });

        test('Then clicking the search btn should call the function search', async () => {
            await act(() => result.current.searchMovie('pinocho', 1));
            expect(TmdbApi.prototype.searchMovie).toHaveBeenCalled();
        });

        test('Then clicking the search btn without write anithing should call the function search', async () => {
            await act(() => result.current.searchMovie('', 1));
            expect(TmdbApi.prototype.getPopularMovies).toHaveBeenCalled();
        });
    });
});

describe(`Given useMovies (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    let buttons: Array<HTMLElement>;
    beforeEach(() => {
        TestComponent = () => {
            const { setPage, setActiveOperation } = useMovies();
            return (
                <>
                    <button onClick={() => setPage(1)}>set page</button>
                    <button onClick={() => setActiveOperation('filter')}>
                        set active to filter
                    </button>
                    <button onClick={() => setActiveOperation('search')}>
                        set active to search
                    </button>
                </>
            );
        };
        render(<TestComponent />);
        buttons = screen.getAllByRole('button');
    });

    describe(`When we change the page and the activo operation is filter`, () => {
        test('Then should call the function getFilteredMovies', async () => {
            userEvent.click(buttons[1]);
            userEvent.click(buttons[0]);
            expect(TmdbApi.prototype.filterGenre).toHaveBeenCalled();
        });
    });

    describe(`When we change the page and the activo operation is search`, () => {
        test('Then should call the function getPopularMovies', async () => {
            userEvent.click(buttons[2]);
            userEvent.click(buttons[0]);

            await waitFor(() => {
                expect(TmdbApi.prototype.getPopularMovies).toHaveBeenCalled();
            });
        });
    });
});
