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
        if (!obj) return;
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
        
        if (!obj) return;
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
        if (!obj) {
            setFavorites([]);
            return;
        }
        objValues = Object.keys(obj).map((key) => obj[key]);
        setFavorites(objValues);
    });

    return objValues;
}

export function writeWatchedMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);

    let exist = false;

    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/watchedMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        if (!obj) return;
        exist = Object.keys(obj).some((key) => obj[key] === idMovie);
    });

    if (exist) return;

    const newPostKey = push(child(ref(database), 'user')).key;
    const updates: { [key: string]: number } = {};
    updates['/user/' + userUID + '/watchedMovies/' + newPostKey] = idMovie;
    return update(ref(database), updates);
}

export function deleteWatchedMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);

    let idToRemove = undefined;

    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/watchedMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        if (!obj) return;
        idToRemove = Object.keys(obj).find((key) => obj[key] === idMovie);
    });

    if (!idToRemove) return;

    const updates: { [key: string]: null } = {};
    updates['/user/' + userUID + '/watchedMovies/' + idToRemove] = null;
    return update(ref(database), updates);
}

export function getWatched(
    userUID: string,
    setWatched: (objValues: Array<number>) => void
) {
    let objValues;
    const database = getDatabase(firebaseApp);
    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/watchedMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        if (!obj) {
            setWatched([]);
            return;
        }
        objValues = Object.keys(obj).map((key) => obj[key]);
        setWatched(objValues);
    });

    return objValues;
}

export function writeLikedMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);

    let exist = false;

    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/likedMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        if (!obj) return;
        exist = Object.keys(obj).some((key) => obj[key] === idMovie);
    });

    if (exist) return;

    const newPostKey = push(child(ref(database), 'user')).key;
    const updates: { [key: string]: number } = {};
    updates['/user/' + userUID + '/likedMovies/' + newPostKey] = idMovie;
    return update(ref(database), updates);
}

export function deleteLikedMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);

    let idToRemove = undefined;

    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/likedMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        if (!obj) return;
        idToRemove = Object.keys(obj).find((key) => obj[key] === idMovie);
    });

    if (!idToRemove) return;

    const updates: { [key: string]: null } = {};
    updates['/user/' + userUID + '/likedMovies/' + idToRemove] = null;
    return update(ref(database), updates);
}

export function getLiked(
    userUID: string,
    setLiked: (objValues: Array<number>) => void
) {
    let objValues;
    const database = getDatabase(firebaseApp);
    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/likedMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        if (!obj) {
            setLiked([]);
            return;
        }
        objValues = Object.keys(obj).map((key) => obj[key]);
        setLiked(objValues);
    });

    return objValues;
}

export function writeDislikedMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);

    let exist = false;

    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/dislikedMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        if (!obj) return;
        exist = Object.keys(obj).some((key) => obj[key] === idMovie);
    });

    if (exist) return;

    const newPostKey = push(child(ref(database), 'user')).key;
    const updates: { [key: string]: number } = {};
    updates['/user/' + userUID + '/dislikedMovies/' + newPostKey] = idMovie;
    return update(ref(database), updates);
}

export function deleteDislikedMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);

    let idToRemove = undefined;

    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/dislikedMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        if (!obj) return;
        idToRemove = Object.keys(obj).find((key) => obj[key] === idMovie);
    });

    if (!idToRemove) return;

    const updates: { [key: string]: null } = {};
    updates['/user/' + userUID + '/dislikedMovies/' + idToRemove] = null;
    return update(ref(database), updates);
}

export function getDisliked(
    userUID: string,
    setDisliked: (objValues: Array<number>) => void
) {
    let objValues;
    const database = getDatabase(firebaseApp);
    const topUserPostsRef = query(
        ref(database, '/user/' + userUID + '/dislikedMovies/')
    );

    onValue(topUserPostsRef, (snapshot: DataSnapshot) => {
        const obj = snapshot.val();
        if (!obj) {
            setDisliked([]);
            return;
        }
        objValues = Object.keys(obj).map((key) => obj[key]);
        setDisliked(objValues);
    });

    return objValues;
}
