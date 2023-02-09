import { MovieStructure } from '../types/movieStructure';
import { MovieAction } from './action.creators';
import { movieActionTypes } from './action.types';

export function movieReducer(
    state: Array<MovieStructure>,
    action: MovieAction
): Array<MovieStructure> {
    switch (action.type) {
        case movieActionTypes.popular:
            return action.payload

        case movieActionTypes.filter:
            return action.payload

        case movieActionTypes.search:
            return action.payload

        default:
            return [...state];
    }
}
