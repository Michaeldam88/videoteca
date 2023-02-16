import { firebaseApp } from './firebaseApp';

jest.mock('firebase/analytics', () => ({
    isSupported: jest.fn(() => Promise.resolve(true)),
    getAnalytics: jest.fn(() => ({
        logEvent: jest.fn(),
        setCurrentScreen: jest.fn(),
        setUserId: jest.fn(),
    })),
}));

describe('Firebase analytics initialization', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize Firebase app', () => {
        expect(firebaseApp).toBeDefined();
    });
});
