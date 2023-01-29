import { useCallback, useMemo, useState } from 'react';
import { TmdbApi } from '../services/tmdbApi';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

export type UseMovies = {
    movies: Array<MovieStructure>;
    genres: Array<GenreStructure>;
    getPopularMovies: () => Promise<void>;
    getGenres: () => Promise<void>;
    
};

export function useMovies(): UseMovies {
    const tmdbApi = useMemo(() => new TmdbApi(), []);

    const genreInitialState: Array<GenreStructure> = [];
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState(genreInitialState);
    const [modal, setModal] = useState(null);

    const getGenres = useCallback(async () => {
        const genres = await tmdbApi.getGenres();
        setGenres(genres);
    }, [tmdbApi]);

    const getPopularMovies = useCallback(async () => {
        const moviesList = await tmdbApi.getPopularMovies();
        setMovies(moviesList.results);
        getGenres();
    }, [tmdbApi, getGenres]);

    return {
        getPopularMovies,
        movies,
        getGenres,
        genres,
        
    };
}
