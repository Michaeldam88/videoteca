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
    deleteDislikedMovie,
    deleteFavoritesMovie,
    deleteLikedMovie,
    deleteWatchedMovie,
    getDisliked,
    getFavorites,
    getLiked,
    getWatched,
    writeDislikedMovie,
    writeFavoritesMovie,
    writeLikedMovie,
    writeWatchedMovie,
} from './firebaseStorage';

jest.mock('firebase/database');

const writeCases = [
    writeDislikedMovie,
    writeFavoritesMovie,
    writeLikedMovie,
    writeWatchedMovie,
];

const deleteCases = [
    deleteDislikedMovie,
    deleteFavoritesMovie,
    deleteLikedMovie,
    deleteWatchedMovie,
];

const getCases = [getDisliked, getFavorites, getLiked, getWatched];

describe('Given the firebase Storage service', () => {
    beforeEach(() => (push as jest.Mock).mockResolvedValue('key'));

    test.each(writeCases)(
        'Then if we call the %p it should call the firebase update function',
        (argument) => {
            const snapshot = {
                val: () => {
                    return {
                        '-NO5N1IrHOMV85NjxF7Z': 89911,
                    };
                },
            };
            (onValue as jest.Mock).mockImplementation((ref, callback) => {
                callback(snapshot);
                return jest.fn();
            });

            argument(user.uid, mockMovie1.id);
            expect(update).toHaveBeenCalled();
        }
    );

    test.each(writeCases)(
        'Then if we call the %p with an invalid id it should not call the firebase update function',
        (argument) => {
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

            argument(user.uid, mockMovie1.id);
            expect(update).not.toHaveBeenCalled();
        }
    );

    test.each(writeCases)(
        'Then it we call the %p and the snapshot is empty it should call the update function',
        (argument) => {
            const snapshot = {
                val: () => null,
            };
            (onValue as jest.Mock).mockImplementation((ref, callback) => {
                callback(snapshot);
                return jest.fn();
            });

            argument(user.uid, mockMovie1.id);
            expect(update).toHaveBeenCalled();
        }
    );

    test.each(deleteCases)(
        'Then it we call the deleteFavoritesMovie function it should call the firebase update function',
        (argument) => {
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

            argument(user.uid, mockMovie1.id);

            expect(update).toHaveBeenCalled();
        }
    );

    test.each(deleteCases)(
        'Then if we call the deleteFavoritesMovie function with an invalid id it should not call the firebase update function',
        (argument) => {
            const snapshot = {
                val: () => {
                    return {
                        '-NO5N1IrHOMV85NjxF7Z': 89911,
                    };
                },
            };
            (onValue as jest.Mock).mockImplementation((ref, callback) => {
                callback(snapshot);
                return jest.fn();
            });

            argument(user.uid, mockMovie1.id);
            expect(update).not.toHaveBeenCalled();
        }
    );

    test.each(deleteCases)(
        'Then it we call the deleteFavoritesMovie function and the snapshot is empty it should not call the update function',
        (argument) => {
            const snapshot = {
                val: () => null,
            };
            (onValue as jest.Mock).mockImplementation((ref, callback) => {
                callback(snapshot);
                return jest.fn();
            });

            argument(user.uid, mockMovie1.id);
            expect(update).not.toHaveBeenCalled();
        }
    );

    test.each(getCases)(
        'Then it we call the %p it should return the value we gave',
        (argument) => {
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

            const result = argument(user.uid, setFavorites);
            expect(setFavorites).toHaveBeenCalled();
            expect(result).toEqual([899112]);
        }
    );

    test.each(getCases)('Then it we call the %p function with an empty snapshot it should return the value we gave', (argument) => {
        const setFavorites = jest.fn();

        const snapshot = {
            val: () => null,
        };
        (onValue as jest.Mock).mockImplementation((ref, callback) => {
            callback(snapshot);
            return jest.fn();
        });

        const result = argument(user.uid, setFavorites);
        expect(setFavorites).toHaveBeenCalled();
        expect(result).toEqual(undefined);
    });
});
