import { User } from 'firebase/auth';
import { MovieStructure } from '../types/movieStructure';
import { movieActionTypes, userActionTypes } from './action.types';

export type MovieAction = {
    type: string;
    payload: Array<MovieStructure>;
};

export const searchMovies = (payload: Array<MovieStructure>): MovieAction => ({
    type: movieActionTypes.search,
    payload,
});

export const filterMovie = (payload: Array<MovieStructure>): MovieAction => ({
    type: movieActionTypes.filter,
    payload,
});

export const popularMovie = (payload: Array<MovieStructure>): MovieAction => ({
    type: movieActionTypes.popular,
    payload,
});

export type UserAction = {
    type: string;
    payload: Partial<User> | null;
};

export const loginUser = (payload: Partial<User>): UserAction => ({
    type: userActionTypes.addUser,
    payload,
});

export const logoutUser = (payload: null): UserAction => ({
    type: userActionTypes.removeUser,
    payload,
});
