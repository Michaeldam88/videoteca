import { child, getDatabase, push, ref, set, update } from 'firebase/database';
import { firebaseApp } from '../firebaseApp';

export function writeFavoritesMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);
    const newPostKey = push(child(ref(database), 'user')).key;
    const updates = {};
    //updates['/user/' + userUID + '/favoritesMovies/' + newPostKey] = idMovie;
    alert('guardado');
    return update(ref(database), updates);
}

export function writeWatchedMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);
    const newPostKey = push(child(ref(database), 'user')).key;
    const updates = {};
    //updates['/user/' + userUID + '/watchedMovies/' + newPostKey] = idMovie;
    alert('guardado');
    return update(ref(database), updates);
}
