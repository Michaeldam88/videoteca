/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

interface MovieContextStructure {
    movies: Array<MovieStructure>;
    genres: Array<GenreStructure>;
    details: Partial<MovieStructure>;
    getPopularMovies: () => Promise<void>;
    getGenres: () => Promise<void>;
    getDetails: (id: number) => Promise<void>;
    modal: string | null | number;
    setModal: React.Dispatch<React.SetStateAction<null>>;
}

const initialContext: MovieContextStructure = {
    movies: [],
    genres: [],
    details: {},
    getPopularMovies: async () => {},
    getGenres: async () => {},
    getDetails: async (id) => {},
    modal: null,
    setModal: () => {},
};

export const MovieContext = createContext(initialContext);
