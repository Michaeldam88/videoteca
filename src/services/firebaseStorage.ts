import { child, getDatabase, push, ref, update } from 'firebase/database';
import { firebaseApp } from '../firebaseApp';

export function writeFavoritesMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);
    const newPostKey = push(child(ref(database), 'user')).key;
    const updates:any = {};
    updates['/user/' + userUID + '/favoritesMovies/' + newPostKey] = idMovie;    
    return update(ref(database), updates);
}

export function writeWatchedMovie(userUID: string, idMovie: number) {
    const database = getDatabase(firebaseApp);
    const newPostKey = push(child(ref(database), 'user')).key;
    const updates: any = {};
    updates['/user/' + userUID + '/watchedMovies/' + newPostKey] = idMovie;    
    return update(ref(database), updates);
}
