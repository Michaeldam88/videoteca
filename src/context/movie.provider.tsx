import { useMemo } from 'react';
import { useMovies } from '../hooks/use.movies';
import { useUser } from '../hooks/use.user';
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
        searchMovie,
    } = useMovies();

    const { user, setUser } = useUser();

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
            searchMovie,
            user,
            setUser,
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
            searchMovie,
            user,
            setUser,
        ]
    );

    return (
        <MovieContext.Provider value={context}>
            {children}
        </MovieContext.Provider>
    );
}
