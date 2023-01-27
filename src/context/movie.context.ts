/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { GenreStructure } from '../types/genreStructure';
import { MovieStructure } from '../types/movieStructure';

interface MovieContextStructure {
    movies: Array<MovieStructure>;
    genres: Array<GenreStructure>;
    getPopularMovies: () => Promise<void>;
}

const initialContext: MovieContextStructure = {
    movies: [],
    genres: [],
    getPopularMovies: async () => {},
};

export const MovieContext = createContext(initialContext);
