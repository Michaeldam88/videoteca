/* eslint-disable @typescript-eslint/no-empty-function */
import { User } from 'firebase/auth';
import { createContext } from 'react';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

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
    user: User | null;
    login: () => Promise<void>;
}

const initialContext: MovieContextStructure = {
    movies: [],
    genres: [],
    details: {},
    user: null,
    getPopularMovies: async () => {},
    getFilteredMovies: async (genre) => {},
    getDetails: async (id) => {},
    filterModal: false,
    setFilterModal: () => {},
    searchMovie: async (keyword) => {},
    login: async () => {}
};

export const MovieContext = createContext(initialContext);
