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

    // test('Then it we call the deleteFavoritesMovie function it should call the firebase update function', () => {
    //     deleteFavoritesMovie(user.uid, mockMovie1.id);
    //     expect(update).toHaveBeenCalled();
    // });

    test('should pass', async () => {
        let idToRemove = undefined;
        const snapshot = { val: () => idToRemove = "111" };
        (onValue as jest.Mock).mockImplementation((ref, callback) => {
            callback(snapshot);
            return jest.fn();
        });
        console.log(idToRemove);
        deleteFavoritesMovie(user.uid, mockMovie1.id);
        console.log(idToRemove);

        expect(update).toHaveBeenCalled();
    });

    // test('Then it we call the getFavorites function it should return', () => {
    //     const setFavorites = jest.fn()

    //     const result = getFavorites(user.uid, setFavorites);
    //     expect(result).toBe("xxx");
    // });
});
