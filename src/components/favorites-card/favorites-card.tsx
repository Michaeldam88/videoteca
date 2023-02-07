import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useContext, useState } from 'react';
import { MovieContext } from '../../context/movie.context';
import {
    deleteFavoritesMovie,
    writeFavoritesMovie,
    deleteWatchedMovie,
    writeWatchedMovie,
    deleteLikedMovie,
    writeLikedMovie,
    deleteDislikedMovie,
    writeDislikedMovie,
} from '../../services/firebaseStorage';
import { MovieStructure } from '../../types/movieStructure';

export function FavoritesCard({
    movie,
    setIdDetails,
}: {
    movie: MovieStructure;
    setIdDetails: React.Dispatch<React.SetStateAction<number | null>>;
}) {
    const { user, favorites, watched, liked, disliked } =
        useContext(MovieContext);

    const genre = movie.genres
        ? movie.genres[0].name
        : [''];

    const [open, setOpen] = useState(false);
    const [openAddedFavorites, setOpenAddedFavorites] = useState(false);
    const [openRemovedFavorites, setOpenRemovedFavorites] = useState(false);
    const [openAddedWatched, setOpenAddedWatched] = useState(false);
    const [openRemovedWatched, setOpenRemovedWatched] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClickAddFavorites = () => {
        setOpenAddedFavorites(true);
        if (user && movie.id) writeFavoritesMovie(user.uid, movie.id);
    };

    const handleClickRemoveFavorites = () => {
        setOpenRemovedFavorites(true);
        if (user && movie.id) deleteFavoritesMovie(user.uid, movie.id);
    };

    const handleClickAddWatched = () => {
        setOpenAddedWatched(true);
        if (user && movie.id) writeWatchedMovie(user.uid, movie.id);
    };

    const handleClickRemoveWatched = () => {
        setOpenRemovedWatched(true);
        if (user && movie.id) deleteWatchedMovie(user.uid, movie.id);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAddedWatched(false);
        setOpenRemovedWatched(false);
        setOpenAddedFavorites(false);
        setOpenRemovedFavorites(false);
        setOpen(false);
    };

    return (
        <li className="movie-card">
            <img
                className="movie-card__img"
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : ''
                }
                alt={movie.title}
            />

            <div className="movie-card__top">
                {watched.some((element) => element === movie.id) ? (
                    <span
                        className="movie-card__eye movie-card__eye--selected material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickRemoveWatched() : handleClick()
                        }
                    >
                        visibility
                    </span>
                ) : (
                    <span
                        className="movie-card__eye material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickAddWatched() : handleClick()
                        }
                    >
                        visibility
                    </span>
                )}
                {disliked.some((element) => element === movie.id) ? (
                    <span
                        className="movie-card__thumsDown movie-card__thumsDown--selected material-symbols-outlined"
                        onClick={() =>
                            user && user.uid && movie.id
                                ? deleteDislikedMovie(user.uid, movie.id)
                                : handleClick()
                        }
                    >
                        recommend
                    </span>
                ) : (
                    <span
                        className="movie-card__thumsDown material-symbols-outlined"
                        onClick={() => {
                            user && user.uid && movie.id
                                ? writeDislikedMovie(user.uid, movie.id)
                                : handleClick();

                            if (user && movie.id)
                                deleteLikedMovie(user.uid, movie.id);
                        }}
                    >
                        recommend
                    </span>
                )}

                {liked.some((element) => element === movie.id) ? (
                    <span
                        className="movie-card__thumsUp movie-card__thumsUp--selected material-symbols-outlined"
                        onClick={() =>
                            user && user.uid && movie.id
                                ? deleteLikedMovie(user.uid, movie.id)
                                : handleClick()
                        }
                    >
                        recommend
                    </span>
                ) : (
                    <span
                        className="movie-card__thumsUp material-symbols-outlined"
                        onClick={() => {
                            user && user.uid && movie.id
                                ? writeLikedMovie(user.uid, movie.id)
                                : handleClick();

                            if (user && movie.id)
                                deleteDislikedMovie(user.uid, movie.id);
                        }}
                    >
                        recommend
                    </span>
                )}

                {favorites.some((element) => element === movie.id) ? (
                    <span
                        className="movie-card__star material-symbols-outlined --filled"
                        onClick={() =>
                            user ? handleClickRemoveFavorites() : handleClick()
                        }
                    >
                        star
                    </span>
                ) : (
                    <span
                        className="movie-card__star material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickAddFavorites() : handleClick()
                        }
                    >
                        star
                    </span>
                )}
            </div>

            <div
                className="movie-card__bottom"
                onClick={() => {
                    if (movie.id) {
                        setIdDetails(movie.id);
                    }
                }}
            >
                <h4 className="movie-card__tag">{genre}</h4>
                <h2 className="movie-card__title">
                    {movie.title || movie.name}
                </h2>
                <h3 className="movie-card__year">
                    {movie.release_date ? movie.release_date.slice(0, 4) : ''}
                    {movie.first_air_date
                        ? movie.first_air_date.slice(0, 4)
                        : ''}
                </h3>
            </div>

            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="warning"
                    sx={{ width: '100%' }}
                >
                    Para guardar tus favoritos logueate primero
                </Alert>
            </Snackbar>

            <Snackbar
                open={openAddedFavorites}
                autoHideDuration={4000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    ¡Añadido a tus favoritos!
                </Alert>
            </Snackbar>

            <Snackbar
                open={openRemovedFavorites}
                autoHideDuration={4000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    ¡Quitado de tus favoritos!
                </Alert>
            </Snackbar>
            <Snackbar
                open={openAddedWatched}
                autoHideDuration={4000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    ¡Marcado como visto!
                </Alert>
            </Snackbar>

            <Snackbar
                open={openRemovedWatched}
                autoHideDuration={4000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    Marcado como no visto!
                </Alert>
            </Snackbar>
        </li>
    );
}
