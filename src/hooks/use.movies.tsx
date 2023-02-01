import { useCallback, useEffect, useMemo, useState } from 'react';
import { TmdbApi } from '../services/tmdbApi';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

export type UseMovies = {
    movies: Array<MovieStructure>;
    genres: Array<GenreStructure>;
    details: Partial<MovieStructure>;
    getPopularMovies: () => Promise<void>;
    getDetails: (id: number) => Promise<void>;
    getFilteredMovies: (genre: string) => Promise<void>;
    filterModal: boolean;
    setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
    searchMovie: (keyword: string) => Promise<void>;
};

export function useMovies(): UseMovies {
    const tmdbApi = useMemo(() => new TmdbApi(), []);

    const genreInitialState: Array<GenreStructure> = [];
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState(genreInitialState);
    const [details, setDetails] = useState({});
    const [filterModal, setFilterModal] = useState(false);

    const getGenres = useCallback(async () => {
        const genres = await tmdbApi.getGenres();
        setGenres(genres);
    }, [tmdbApi]);

    useEffect(() => {
        getGenres();
    }, [getGenres]);

    const getPopularMovies = useCallback(async () => {
        const moviesList = await tmdbApi.getPopularMovies();
        setMovies(moviesList.results);
    }, [tmdbApi]);

    const getDetails = useCallback(
        async (id: number) => {
            const details = await tmdbApi.getDetails(id);
            setDetails(details);
        },
        [tmdbApi]
    );

    const getFilteredMovies = useCallback(
        async (genre: string) => {
            const filteredList = await tmdbApi.filterGenre(genre);
            setMovies(filteredList.results);
        },
        [tmdbApi]
    );

    const searchMovie = useCallback(
        async (keyword: string) => {
            if (keyword.length > 0) {
                const filteredList = await tmdbApi.searchMovie(keyword);
                setMovies(filteredList.results);
            }

            if (keyword.length === 0) {
                getPopularMovies();
            }
        },
        [tmdbApi, getPopularMovies]
    );

    return {
        getPopularMovies,
        movies,
        genres,
        getDetails,
        details,
        filterModal,
        setFilterModal,
        getFilteredMovies,
        searchMovie,
    };
}
