import { useMemo } from 'react';
import { useMovies } from '../hooks/use.movies';
import { MovieContext } from './movie.context';

export function MovieContextProvider({ children }: { children: JSX.Element }) {
    const {
        movies,
        genres,
        getPopularMovies,
        getDetails,
        details,
        filterModal,
        setFilterModal,
        getFilteredMovies,
    } = useMovies();

    const context = useMemo(
        () => ({
            getPopularMovies,
            movies,
            genres,
            getFilteredMovies,
            getDetails,
            details,
            filterModal,
            setFilterModal,
        }),
        [
            getPopularMovies,
            movies,
            genres,
            getDetails,
            details,
            filterModal,
            setFilterModal,
            getFilteredMovies,
        ]
    );

    return (
        <MovieContext.Provider value={context}>
            {children}
        </MovieContext.Provider>
    );
}
