import { User } from 'firebase/auth';
import { useState } from 'react';
import { useLocalStorage } from './use.LocalStorage';

export type UseUser = {
    addUser: (user: User | null) => void;
    removeUser: () => void;
    user: User | null;
};

export function useUser(): UseUser {
    const [user, setUser] = useState<User | null>(null);
    const { setItem } = useLocalStorage();

    if (user) console.log('logueado-user', user);

    const addUser = (user: User | null) => {
        setUser(user);
        setItem('user', JSON.stringify(user));
    };

    const removeUser = () => {
        setUser(null);
        setItem('user', '');
    };

    return {
        user,
        addUser,
        removeUser,
    };
}
