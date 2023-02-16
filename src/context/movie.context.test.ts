
import { renderHook } from '@testing-library/react';
import { useContext } from 'react';
import { MovieContext } from './movie.context';


describe('MovieContext', () => {
    it('should provide initial context', () => {
        const { result } = renderHook(() => useContext(MovieContext));
        expect(result.current).toEqual({
            movies: [],
            genres: [],
            details: {},
            user: null,
            filterModal: false,
            page: 0,
            totPages: 0,
            favorites: [],
            watched: [],
            liked: [],
            disliked: [],
            activeOperation: '',
            favoritesList: [],
            getPopularMovies: expect.any(Function),
            getFilteredMovies: expect.any(Function),
            getDetails: expect.any(Function),
            getFavoritesList: expect.any(Function),
            searchMovie: expect.any(Function),
            login: expect.any(Function),
            logout: expect.any(Function),
            setDetails: expect.any(Function),
            setFilterModal: expect.any(Function),
            setPage: expect.any(Function),
            setActiveOperation: expect.any(Function),
        });
    });
});

