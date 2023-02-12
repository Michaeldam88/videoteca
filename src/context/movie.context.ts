/* eslint-disable @typescript-eslint/no-empty-function */
import { User } from 'firebase/auth';
import { createContext } from 'react';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

export interface MovieContextStructure {
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
    favorites: Array<number>;
    liked: Array<number>;
    disliked: Array<number>;
    watched: Array<number>;
    activeOperation: string;
    setDetails: React.Dispatch<React.SetStateAction<object>>;
    getFavoritesList: (ids: Array<number>) => Promise<void>;
    favoritesList: Array<MovieStructure>;
}

const initialContext: MovieContextStructure = {
    movies: [],
    genres: [],
    details: {},
    user: null,
    filterModal: false,
    page: 0,
    totPages: 0,
    favorites: [],
    watched: [],
    liked: [],
    disliked: [],
    activeOperation: '',
    favoritesList: [],
    getPopularMovies: async () => {},
    getFilteredMovies: async (genre) => {},
    getDetails: async (id) => {},
    getFavoritesList: async (ids) => {},
    searchMovie: async (keyword) => {},
    login: async () => {},
    logout: () => {},
    setDetails: () => {},
    setFilterModal: () => {},
    setPage: () => {},
    setActiveOperation: () => {},
};

export const MovieContext = createContext(initialContext);
