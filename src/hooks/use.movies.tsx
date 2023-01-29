import { useCallback, useMemo, useState } from 'react';
import { TmdbApi } from '../services/tmdbApi';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

export type UseMovies = {
    movies: Array<MovieStructure>;
    genres: Array<GenreStructure>;
    details: Partial<MovieStructure>;
    getPopularMovies: () => Promise<void>;
    getGenres: () => Promise<void>;
    getDetails: (id: number) => Promise<void>;
};

export function useMovies(): UseMovies {
    const tmdbApi = useMemo(() => new TmdbApi(), []);

    const genreInitialState: Array<GenreStructure> = [];
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState(genreInitialState);
    const [details, setDetails] = useState({});

    const getGenres = useCallback(async () => {
        const genres = await tmdbApi.getGenres();
        setGenres(genres);
    }, [tmdbApi]);

    const getPopularMovies = useCallback(async () => {
        const moviesList = await tmdbApi.getPopularMovies();
        setMovies(moviesList.results);
        getGenres();
    }, [tmdbApi, getGenres]);

    const getDetails = useCallback(
        async (id: number) => {
            const details = await tmdbApi.getDetails(id);
            setDetails(details)
        },
        [tmdbApi]
    );

    return {
        getPopularMovies,
        movies,
        getGenres,
        genres,
        getDetails,
        details
    };
}
