import { useMemo } from 'react';
import { useMovies } from '../hooks/use.movies';
import { MovieContext } from './movie.context';

export function MovieContextProvider({ children }: { children: JSX.Element }) {
    const { movies, genres, getPopularMovies, getGenres, getDetails, details } =
        useMovies();

    const context = useMemo(
        () => ({
            getPopularMovies,
            movies,
            genres,
            getGenres,
            getDetails,
            details
        }),
        [getPopularMovies, movies, genres, getGenres,getDetails,details]
    );

    return (
        <MovieContext.Provider value={context}>
            {children}
        </MovieContext.Provider>
    );
}
