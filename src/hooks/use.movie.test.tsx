import { act, renderHook } from '@testing-library/react';
import { mockValidRepoResponse } from '../mocks/testing.hookMock';
import { TmdbApi } from '../services/tmdbApi';
import { useMovies } from './use.movies';

jest.mock('../services/tmdbApi');

TmdbApi.prototype.getGenres = jest.fn();
TmdbApi.prototype.getPopularMovies = jest.fn();
TmdbApi.prototype.getDetails = jest.fn();
TmdbApi.prototype.searchMovie = jest.fn();
TmdbApi.prototype.filterGenre = jest.fn();

describe(`Given useMovies (custom hook)
            render with a virtual component`, () => {
    const { result,rerender } = renderHook(() => useMovies());
    //console.log(result.current)
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

        // test('Then setting a new page and the action to filter should call filter function', async () => {
        //     rerender();
        //     await act(() => {
        //         result.current.setActiveOperation('filter');
        //         result.current.setPage(1);                
        //     });
            
        //     expect(TmdbApi.prototype.filterGenre).toHaveBeenCalled();
        // });

        // test('Then setting a new page and the action to search should call popular function as the is no text written', async () => {
        //     result.current.activeOperation = 'search';
        //     console.log(result.current.activeOperation);

        //     await act(() => result.current.setPage(2));
        //     expect(TmdbApi.prototype.getPopularMovies).toHaveBeenCalled();
        // });
    });
});
