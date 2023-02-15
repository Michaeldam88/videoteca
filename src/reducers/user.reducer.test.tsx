import { User } from '@firebase/auth';
import { user } from '../mocks/testing.hookMock';
import { loginUser, logoutUser, UserAction } from './action.creators';
import { userReducer } from './user.reducer';

describe('Given the reducer', () => {
    let state: Partial<User> | null;
    let action: UserAction;

    describe('When the action type is "user@addUser"', () => {
        test('Then it should return as state the loaded data', () => {
            state = null;
            action = loginUser(user);
            const result = userReducer(state, action);
            expect(result).toEqual(user);
        });
    });

    describe('When the action type is "user@removeUser"', () => {
        test('Then it should return the state with the data added', () => {
            state = user;
            action = logoutUser(null);
            const result = userReducer(state, action);
            expect(result).toEqual(null);
        });
    });

    describe('When the action type is not valid', () => {
        test('Then it should return the state', () => {
            state = null;
            action = { type: 'Bad', payload: user };
            const result = userReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
