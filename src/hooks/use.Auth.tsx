import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { loginFirebase, logoutFirebase } from '../services/firebaseAuth';
import { getFavorites } from '../services/firebaseStorage';
import { useLocalStorage } from './use.LocalStorage';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [favorites, setFavorites] = useState<Array<number>>([]);
    const { getItem, setItem } = useLocalStorage();

    useEffect(() => {
        const user = getItem('user');
        if (user) {
            setUser(JSON.parse(user));
            reloadFavorites(JSON.parse(user));
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
            reloadFavorites(user);
        }
    };

    const logout = () => {
        logoutFirebase();
        setUser(null);
        setItem('user', '');
    };

    const reloadFavorites = (user: User) => {
        if (user) {
            getFavorites(user.uid,setFavorites);
        }
    };

    return { login, logout, reloadFavorites, user, favorites };
};
