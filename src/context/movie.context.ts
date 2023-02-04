/* eslint-disable @typescript-eslint/no-empty-function */
import { User } from 'firebase/auth';
import { createContext } from 'react';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

interface MovieContextStructure {
    movies: Array<MovieStructure>;
    genres: Array<GenreStructure>;
    details: Partial<MovieStructure>;
    getPopularMovies: (page: number) => Promise<void>;
    getFilteredMovies: (genre: string, page: number) => void;
    getDetails: (id: number) => Promise<void>;
    filterModal: boolean;
    setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
    searchMovie: (keyword: string, page: number) => Promise<void>;
    user: User | null;
    login: () => Promise<void>;
    logout: () => void;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totPages: number;
    setActiveOperation: React.Dispatch<React.SetStateAction<string>>;
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
    login: async () => {},
    logout: () => {},
    page: 0,
    setPage: () => {},
    totPages: 0,
    setActiveOperation: () => {},
};

export const MovieContext = createContext(initialContext);
