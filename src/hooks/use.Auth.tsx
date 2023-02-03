import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { loginFirebase } from '../services/firebaseAuth';
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
        const user = await loginFirebase();
        setUser(user);
        setItem('user', JSON.stringify(user));        
    };

    const logout = () => {
        setUser(null);
        setItem('user', '');
    };

    return { login, logout, user };
};
