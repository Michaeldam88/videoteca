import { useState } from 'react';

export const useLocalStorage = () => {
    const [value, setValue] = useState<string | null>(null);

    const setItem = (key: string, value: string) => {
        localStorage.setItem(key, value);
        setValue(value);
    };

    const getItem = (key: string) => {
        const value = localStorage.getItem(key);
        setValue(value);
        return value;
    };

    return { value, setItem, getItem };
};


