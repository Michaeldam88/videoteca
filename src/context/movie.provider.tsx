import { useMemo } from 'react';
import { useMovies } from '../hooks/use.movies';
import { MovieContext } from './movie.context';

export function MovieContextProvider({ children }: { children: JSX.Element }) {
    const { movies, genres, getPopularMovies, getGenres } = useMovies();

    const context = useMemo(
        () => ({
            getPopularMovies,
            movies,
            genres,
            getGenres,
        }),
        [getPopularMovies, movies, genres, getGenres]
    );

    return (
        <MovieContext.Provider value={context}>
            {children}
        </MovieContext.Provider>
    );
}
