import { useCallback, useMemo, useState } from 'react';
import { TmdbApi } from '../services/tmdbApi';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

export type UseMovies = {
    movies: Array<MovieStructure>;
    genres: Array<GenreStructure>;
    getPopularMovies: () => Promise<void>;
};

export function useMovies(): UseMovies {
    const tmdbApi = useMemo(() => new TmdbApi(), []);   

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);


    const getPopularMovies = useCallback(async () => {
        const moviesList = await tmdbApi.getPopularMovies();
        setMovies(moviesList.results);
        const genres = await tmdbApi.getGenres();
        setGenres(genres.genres);

    }, [tmdbApi]);

    
    

    return {
        getPopularMovies,
        movies,
        genres,
    };
}