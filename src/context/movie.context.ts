/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';
import { UserStructure } from '../types/userStructure';

interface MovieContextStructure {
    movies: Array<MovieStructure>;
    genres: Array<GenreStructure>;
    details: Partial<MovieStructure>;
    getPopularMovies: () => Promise<void>;
    getFilteredMovies: (genre: string) => void;
    getDetails: (id: number) => Promise<void>;
    filterModal: boolean;
    setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
    searchMovie: (keyword: string) => Promise<void>;
    user: Partial<UserStructure> | null;
    setUser: React.Dispatch<
        React.SetStateAction<null | Partial<UserStructure>>
    >;
}

const initialContext: MovieContextStructure = {
    movies: [],
    genres: [],
    details: {},
    user: {},
    setUser: () => {},
    getPopularMovies: async () => {},
    getFilteredMovies: async (genre) => {},
    getDetails: async (id) => {},
    filterModal: false,
    setFilterModal: () => {},
    searchMovie: async (keyword) => {},
};

export const MovieContext = createContext(initialContext);
