import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useContext, useState } from 'react';
import { MovieContext } from '../../context/movie.context';
import {
    deleteFavoritesMovie,
    writeFavoritesMovie,
} from '../../services/firebaseStorage';
import { MovieStructure } from '../../types/movieStructure';

export function FavoritesCard({
    movie,
    setIdDetails,
}: {
    movie: Partial<MovieStructure>;
    setIdDetails: React.Dispatch<React.SetStateAction<number | null>>;
}) {
    const { genres, user, favorites } = useContext(MovieContext);

    //tengo que cambiar el 333 por movie.genre_ids[0]
    const genreFiltered = genres.filter((element) => element.id === 333);

    const genre = genreFiltered.length ? genreFiltered[0].name : '';

    const [open, setOpen] = useState(false);
    const [openAddedFavorites, setOpenAddedFavorites] = useState(false);
    const [openRemovedFavorites, setOpenRemovedFavorites] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClickAddedFavorites = () => {
        setOpenAddedFavorites(true);
        if (user && movie.id) writeFavoritesMovie(user.uid, movie.id);
    };

    const handleClickRemovedFavorites = () => {
        setOpenRemovedFavorites(true);
        if (user && movie.id) deleteFavoritesMovie(user.uid, movie.id);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }

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
                {favorites.some((element) => element === movie.id) ? (
                    <span
                        className="movie-card__eye movie-card__eye--selected material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickRemovedFavorites() : handleClick()
                        }
                    >
                        visibility
                    </span>
                ) : (
                    <span
                        className="movie-card__eye material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickAddedFavorites() : handleClick()
                        }
                    >
                        visibility
                    </span>
                )}
                {favorites.some((element) => element === movie.id) ? (
                    <span
                        className="movie-card__thumsDown movie-card__thumsDown--selected material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickRemovedFavorites() : handleClick()
                        }
                    >
                        recommend
                    </span>
                ) : (
                    <span
                        className="movie-card__thumsDown material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickAddedFavorites() : handleClick()
                        }
                    >
                        recommend
                    </span>
                )}

                {favorites.some((element) => element === movie.id) ? (
                    <span
                        className="movie-card__thumsUp movie-card__thumsUp--selected material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickRemovedFavorites() : handleClick()
                        }
                    >
                        recommend
                    </span>
                ) : (
                    <span
                        className="movie-card__thumsUp material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickAddedFavorites() : handleClick()
                        }
                    >
                        recommend
                    </span>
                )}

                {favorites.some((element) => element === movie.id) ? (
                    <span
                        className="movie-card__star material-symbols-outlined --filled"
                        onClick={() =>
                            user ? handleClickRemovedFavorites() : handleClick()
                        }
                    >
                        star
                    </span>
                ) : (
                    <span
                        className="movie-card__star material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickAddedFavorites() : handleClick()
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
        </li>
    );
}
