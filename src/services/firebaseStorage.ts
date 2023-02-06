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
import { firebaseApp } from '../firebaseApp';

export function writeFavoritesMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);

    let exist = false;

    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/favoritesMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        exist = Object.keys(obj).some((key) => obj[key] === idMovie);
    });

    if (exist) return;

    const newPostKey = push(child(ref(database), 'user')).key;
    const updates: { [key: string]: number } = {};
    updates['/user/' + userUID + '/favoritesMovies/' + newPostKey] = idMovie;
    return update(ref(database), updates);
}

export function deleteFavoritesMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);

    let idToRemove = undefined;

    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/favoritesMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        idToRemove = Object.keys(obj).find((key) => obj[key] === idMovie);
    });

    if (!idToRemove) return;

    const updates: { [key: string]: null } = {};
    updates['/user/' + userUID + '/favoritesMovies/' + idToRemove] = null;
    return update(ref(database), updates);
}

export function getFavorites(
    userUID: string,
    setFavorites: (objValues: Array<number>) => void
) {
    let objValues;
    const database = getDatabase(firebaseApp);
    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/favoritesMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        objValues = Object.keys(obj).map((key) => obj[key]);
        setFavorites(objValues);
    });

    return objValues;
}
