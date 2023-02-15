import {
    apiGenresResponse,
    apiResponse,
    details1,
    genres,
} from '../mocks/testing.hookMock';
import { TmdbApi } from './tmdbApi';

describe('Given a tmdbApi service', () => {
    const tmdbApi = new TmdbApi();

    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(apiResponse),
        });
    });

    test('Then we can instantiate it', () => {
        expect(tmdbApi).toBeInstanceOf(TmdbApi);
    });

    describe('When we use getPopular method', () => {
        test('Then we received the list of movies', async () => {
            const data = await tmdbApi.getPopularMovies(1);
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(apiResponse);
        });
        test('Then if there is no response, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await tmdbApi.getPopularMovies(1);
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use filterGenre method', () => {
        test('Then we received the list of movies', async () => {
            const data = await tmdbApi.filterGenre('comedia', 1);
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(apiResponse);
        });
        test('Then if there is no response, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await tmdbApi.filterGenre('comedia', 1);
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use searchMovie method', () => {
        test('Then we received the list of movies', async () => {
            const data = await tmdbApi.searchMovie('pokemon', 1);
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(apiResponse);
        });
        test('Then if there is no response, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await tmdbApi.searchMovie('pokemon', 1);
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use getGenres method', () => {
        test('Then we received the list of movies', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(apiGenresResponse),
            });
            const data = await tmdbApi.getGenres();

            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(genres);
        });
        test('Then if there is no response, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await tmdbApi.getGenres();
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use getDetails method', () => {
        test('Then we received the list of movies', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(details1),
            });
            const data = await tmdbApi.getDetails(555);

            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(details1);
        });
        test('Then if there is no response, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await tmdbApi.getDetails(555);
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });
});
