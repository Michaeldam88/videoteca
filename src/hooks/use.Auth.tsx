import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { loginFirebase, logoutFirebase } from '../services/firebaseAuth';
import { useLocalStorage } from './use.LocalStorage';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const { getItem, setItem } = useLocalStorage();

    useEffect(() => {
        const user = getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = async () => {
        const user = await loginFirebase().catch(() => {
            console.error('Logueo Fallido');
        });
        if (user) {
            setUser(user);
            setItem('user', JSON.stringify(user));
        }
    };

    const logout = () => {
        logoutFirebase();
        setTimeout(() => setUser(null), 3500);
        setItem('user', '');
    };

    return { login, logout, user };
};
