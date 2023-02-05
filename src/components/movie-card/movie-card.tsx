import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useContext, useState } from 'react';
import { MovieContext } from '../../context/movie.context';
import {
    writeFavoritesMovie,
    writeWatchedMovie,
} from '../../services/firebaseStorage';
import { MovieStructure } from '../../types/movieStructure';

export function MovieCard({
    movie,
    setIdDetails,
}: {
    movie: MovieStructure;
    setIdDetails: React.Dispatch<React.SetStateAction<number | null>>;
}) {
    const { genres, user, favorites } = useContext(MovieContext);
    console.log(favorites)

    const genreFiltered = genres.filter(
        (element) => element.id === movie.genre_ids[0]
    );

    const genre = genreFiltered.length ? genreFiltered[0].name : '';

    const [open, setOpen] = useState(false);
    const [openCorrect, setOpenCorrect] = useState(false);
    const [isFavories, setIsFavorites] = useState(false)

    const handleClick = () => {
        setOpen(true);
    };

    const handleClickCorrect = () => {
        setOpenCorrect(true);
        if(user)writeFavoritesMovie(user.uid, movie.id);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenCorrect(false);
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
                <span
                    className="movie-card__star material-symbols-outlined"
                    onClick={() =>
                        user ? handleClickCorrect() : handleClick()
                    }
                >
                    star
                </span>
                <span
                    className="movie-card__star material-symbols-outlined"
                    onClick={() =>
                        user
                            ? writeWatchedMovie(user.uid, movie.id)
                            : handleClick()
                    }
                >
                    visibility
                </span>
            </div>

            <div
                className="movie-card__bottom"
                onClick={() => setIdDetails(movie.id)}
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
                open={openCorrect}
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
        </li>
    );
}
