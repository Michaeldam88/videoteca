import { detailList } from '../mocks/testing.hookMock';
import { MovieStructure } from '../types/movieStructure';
import {
    MovieAction,
    searchMovies,
    filterMovie,
    popularMovie,
} from './action.creators';
import { movieReducer } from './movie.reducer';

describe('Given the reducer', () => {
    let state: Array<MovieStructure>;
    let action: MovieAction;

    describe('When the action type is "movie@search"', () => {
        test('Then it should return as state the loaded data', () => {
            state = [];
            action = searchMovies(detailList);
            const result = movieReducer(state, action);
            expect(result).toEqual(detailList);
        });
    });

    describe('When the action type is "movie@filter"', () => {
        test('Then it should return the state with the data added', () => {
            state = [];
            action = filterMovie(detailList);
            const result = movieReducer(state, action);
            expect(result).toEqual(detailList);
        });
    });

    describe('When the action type is "movie@popular"', () => {
        test('Then it should return the state with the data added', () => {
            state = [];
            action = popularMovie(detailList);
            const result = movieReducer(state, action);
            expect(result).toEqual(detailList);
        });
    });

    describe('When the action type is not valid', () => {
        test('Then it should return the state', () => {
            state = detailList;
            action = { type: 'Bad', payload: detailList };
            const result = movieReducer(state, action);
            expect(result).toEqual(detailList);
        });
    });
});
