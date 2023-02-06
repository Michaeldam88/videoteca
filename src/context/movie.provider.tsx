import { useMemo } from 'react';
import { useFirebase } from '../hooks/use.Firebase';
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
        searchMovie,
        page,
        totPages,
        setPage,
        setActiveOperation,
        activeOperation,
    } = useMovies();

    const { login, logout, reloadFavorites, user, favorites } = useFirebase();

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
            login,
            logout,
            page,
            setPage,
            totPages,
            setActiveOperation,
            reloadFavorites,
            favorites,
            activeOperation,
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
            login,
            logout,
            page,
            setPage,
            totPages,
            setActiveOperation,
            reloadFavorites,
            favorites,
            activeOperation,
        ]
    );

    return (
        <MovieContext.Provider value={context}>
            {children}
        </MovieContext.Provider>
    );
}
