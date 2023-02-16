import { User } from 'firebase/auth';
import { useEffect, useReducer, useState } from 'react';
import { loginUser, logoutUser } from '../reducers/action.creators';
import { userReducer } from '../reducers/user.reducer';
import { loginFirebase, logoutFirebase } from '../services/firebaseAuth';
import {
    getDisliked,
    getFavorites,
    getLiked,
    getWatched,
} from '../services/firebaseStorage';
import { useLocalStorage } from './use.LocalStorage';

export const useFirebase = () => {
    const [favorites, setFavorites] = useState<Array<number>>([]);
    const [watched, setWatched] = useState<Array<number>>([]);
    const [liked, setLiked] = useState<Array<number>>([]);
    const [disliked, setDisliked] = useState<Array<number>>([]);
    const { getItem, setItem } = useLocalStorage();
    const [user, dispatch] = useReducer(userReducer, null);

    useEffect(() => {
        const user = getItem('user');        
        if (user) {
            dispatch(loginUser(JSON.parse(user)));
            reloadFavorites(JSON.parse(user));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = async () => {
        try {
            const user = await loginFirebase();            
            if (user) {
                dispatch(loginUser(user));
                setItem('user', JSON.stringify(user));
                reloadFavorites(user);
            }
        } catch (error) {
        }
    };    
    const logout = () => {
        logoutFirebase();
        dispatch(logoutUser(null));
        setFavorites([]);
        setWatched([]);
        setLiked([]);
        setDisliked([]);
        setItem('user', '');
    };

    const reloadFavorites = (user: User) => {        
            getFavorites(user.uid, setFavorites);
            getWatched(user.uid, setWatched);
            getLiked(user.uid, setLiked);
            getDisliked(user.uid, setDisliked);        
    };
    return {
        login,
        logout,
        user,
        favorites,
        watched,
        liked,
        disliked,
    };
};
