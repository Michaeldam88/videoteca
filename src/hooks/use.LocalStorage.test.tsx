import { renderHook } from '@testing-library/react';
import { useLocalStorage } from './use.LocalStorage';

const localStorageMock = (function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const store:any = {};

    return {
        getItem(key: string) {
            return store[key];
        },

        setItem(key: string, value: string) {
            store[key] = value;
        },
    };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe(`Given useLocalStorage (custom hook)
            render with a virtual component`, () => {
    const { result } = renderHook(() => useLocalStorage());
    describe(`When the api is working`, () => {
        const mockId = '1';
        const mockJson = {data:'json data'};

        test('Then clicking the popular btn should call the function getPopularMovies',  () => {
            
                result.current.setItem(mockId, JSON.stringify(mockJson))
            
            expect(localStorage.getItem(mockId)).toEqual(
                JSON.stringify(mockJson)
            );;
        });
    });
});
