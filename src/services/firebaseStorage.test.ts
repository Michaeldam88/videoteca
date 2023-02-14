import {
    child,
    DataSnapshot,
    getDatabase,
    onValue,
    push,
    query,
    ref,
    update,
} from 'firebase/database';
import { mockMovie1, user } from '../mocks/testing.hookMock';
import {
    deleteFavoritesMovie,
    getFavorites,
    writeDislikedMovie,
    writeFavoritesMovie,
    writeLikedMovie,
    writeWatchedMovie,
} from './firebaseStorage';

jest.mock('firebase/database');

describe('Given the firebase Storage service', () => {
    beforeEach(() => (push as jest.Mock).mockResolvedValue('key'));

    test('Then it we call the writeFavoritesMovie function it should call the firebase update function', () => {
        writeFavoritesMovie(user.uid, mockMovie1.id);
        expect(update).toHaveBeenCalled();
    });

    test('Then it we call the writeFavoritesMovie function and the snapshot is empty it should return', () => {
        const snapshot = {
            val: () => null
        };
        (onValue as jest.Mock).mockImplementation((ref, callback) => {
            callback(snapshot);
            return jest.fn();
        });
        
        writeFavoritesMovie(user.uid, mockMovie1.id);
        expect(update).toHaveBeenCalled();
    });

    test('Then it we call the writeLikedMovie function it should call the firebase update function', () => {
        writeLikedMovie(user.uid, mockMovie1.id);
        expect(update).toHaveBeenCalled();
    });

    test('Then it we call the writeDislikedMovie function it should call the firebase update function', () => {
        writeDislikedMovie(user.uid, mockMovie1.id);
        expect(update).toHaveBeenCalled();
    });

    test('Then it we call the writeWatchedMovie function it should call the firebase update function', () => {
        writeWatchedMovie(user.uid, mockMovie1.id);
        expect(update).toHaveBeenCalled();
    });

    test('Then it we call the deleteFavoritesMovie function it should call the firebase update function', async () => {
        const snapshot = {
            val: () => {
                return {
                    '-NO5N1IrHOMV85NjxF7Z': 899112,
                };
            },
        };
        (onValue as jest.Mock).mockImplementation((ref, callback) => {
            callback(snapshot);
            return jest.fn();
        });

        deleteFavoritesMovie(user.uid, mockMovie1.id);

        expect(update).toHaveBeenCalled();
    });

    test('Then it we call the getFavorites function it should return', () => {
        const setFavorites = jest.fn();

        const snapshot = {
            val: () => {
                return {
                    '-NO5N1IrHOMV85NjxF7Z': 899112,
                };
            },
        };
        (onValue as jest.Mock).mockImplementation((ref, callback) => {
            callback(snapshot);
            return jest.fn();
        });

        const result = getFavorites(user.uid, setFavorites);
        expect(setFavorites).toHaveBeenCalled();
        expect(result).toEqual([899112]);
    });
});
