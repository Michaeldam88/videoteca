import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TmdbApi } from '../services/tmdbApi';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

export type UseMovies = {
    movies: Array<MovieStructure>;
    genres: Array<GenreStructure>;
    details: Partial<MovieStructure>;
    getPopularMovies: (page: number) => Promise<void>;
    getDetails: (id: number) => Promise<void>;
    getFilteredMovies: (genre: string, page: number) => Promise<void>;
    filterModal: boolean;
    setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
    searchMovie: (keyword: string, page: number) => Promise<void>;
    page: number;
    totPages: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setActiveOperation: React.Dispatch<React.SetStateAction<string>>;
    activeOperation:string;
};

export function useMovies(): UseMovies {
    const tmdbApi = useMemo(() => new TmdbApi(), []);

    const genreInitialState: Array<GenreStructure> = [];
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState(genreInitialState);
    const [details, setDetails] = useState({});
    const [filterModal, setFilterModal] = useState(false);
    const [page, setPage] = useState(0);
    const [totPages, setTotPage] = useState(0);
    const [activeOperation, setActiveOperation] = useState('popular');

    const genre = useRef('');
    const keyword = useRef('');

    const getGenres = useCallback(async () => {
        const genres = await tmdbApi.getGenres();
        setGenres(genres);
    }, [tmdbApi]);

    useEffect(() => {
        getGenres();
    }, [getGenres]);

    const getPopularMovies = useCallback(
        async (page: number) => {
            const filteredList = await tmdbApi.getPopularMovies(page);
            setMovies(filteredList.results);
            setTotPage(filteredList.total_pages);
        },
        [tmdbApi]
    );

    const getDetails = useCallback(
        async (id: number) => {
            const details = await tmdbApi.getDetails(id);
            setDetails(details);
        },
        [tmdbApi]
    );

    const getFilteredMovies = useCallback(
        async (receivedGenre: string, page: number) => {
            genre.current = receivedGenre;
            const filteredList = await tmdbApi.filterGenre(receivedGenre, page);
            setMovies(filteredList.results);
            setTotPage(filteredList.total_pages);
        },
        [tmdbApi]
    );

    const searchMovie = useCallback(
        async (receivedKeyword: string, page: number) => {
            keyword.current = receivedKeyword;
            if (receivedKeyword.length > 2) {
                const filteredList = await tmdbApi.searchMovie(
                    receivedKeyword,
                    page
                );
                setMovies(filteredList.results);
                setTotPage(filteredList.total_pages);
            }

            if (receivedKeyword.length === 0) {
                getPopularMovies(page);
            }
        },
        [tmdbApi, getPopularMovies]
    );

    useEffect(() => {
        if (activeOperation === 'popular') getPopularMovies(page + 1);
        if (activeOperation === 'filter')
            getFilteredMovies(genre.current, page + 1);
        if (activeOperation === 'search')
            searchMovie(keyword.current, page + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

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
        page,
        totPages,
        setPage,
        setActiveOperation,
        activeOperation,
    };
}
