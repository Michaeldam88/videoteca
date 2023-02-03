import { useMemo} from 'react';
import { useAuth } from '../hooks/use.Auth';
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
        setActiveOperation
    } = useMovies();

    const { login, logout, user } = useAuth();    

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
            setActiveOperation
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
            setActiveOperation
        ]
    );

    return (
        <MovieContext.Provider value={context}>
            {children}
        </MovieContext.Provider>
    );
}
