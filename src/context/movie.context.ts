/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

interface MovieContextStructure {
    movies: Array<MovieStructure>;
    genres: Array<GenreStructure>;
    details: MovieStructure;
    getPopularMovies: () => Promise<void>;
    getGenres: () => Promise<void>;
    getDetails: (id: number) => Promise<void>;
}

const initialContext: MovieContextStructure = {
    movies: [],
    genres: [],
    details: {},
    getPopularMovies: async () => {},
    getGenres: async () => {},
    getDetails: async (id) => {},
};

export const MovieContext = createContext(initialContext);
