import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../context/movie.context';
import { writeFavoritesMovie } from '../../services/firebaseStorage';

export function DetailsModal({
    id,
    setIdDetails,
}: {
    id: number;
    setIdDetails: React.Dispatch<React.SetStateAction<number | null>>;
}) {
    const { getDetails, details, user } = useContext(MovieContext);

    useEffect(() => {
        getDetails(id);
    }, [getDetails, id]);

    const time = (totalMinutes: number) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    };

    const genres = details.genres
        ? details.genres.map((element) => element.name)
        : [''];

    const [open, setOpen] = useState(false);
    const [openCorrect, setOpenCorrect] = useState(false);

    
    const handleClick = () => {
        setOpen(true);
    };

    const handleClickCorrect = () => {
        setOpenCorrect(true);
        if (user) writeFavoritesMovie(user.uid, id);
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
        <div className="details-modal">
            <span
                className="details-modal__close material-symbols-outlined"
                onClick={() => setIdDetails(null)}
            >
                close
            </span>

            <div className="mobile-view">
                <div className="details-modal__main-info">
                    <h2 className="details-modal__title">{details.title}</h2>
                    <span className="details-modal__age">
                        {details.release_date
                            ? details.release_date.slice(0, 4)
                            : 'Pronto en enstreno'}
                    </span>
                    <span
                        className="details-modal__star material-symbols-outlined"
                        onClick={() =>
                            user ? handleClickCorrect() : handleClick()
                        }
                    >
                        star
                    </span>
                </div>
                <div className="details-modal__info">
                    <p>{genres.join(', ')}</p>
                    <span>·</span>
                    <p className="details-modal__runtime">
                        {details.runtime ? time(details.runtime) : ''}
                    </p>
                </div>
            </div>

            <img
                className="details-modal__img"
                src={
                    details.poster_path
                        ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                        : ''
                }
                alt="pelicula1"
            />
            <div className="desktop-detail">
                <div className="desktop-view">
                    <div className="details-modal__main-info">
                        <h2 className="details-modal__title">
                            {details.title}
                        </h2>
                        <span className="details-modal__age">
                            {details.release_date
                                ? details.release_date.slice(0, 4)
                                : 'Pronto en enstreno'}
                        </span>
                        <span
                            className="details-modal__star material-symbols-outlined"
                            onClick={() =>
                                user ? handleClickCorrect() : handleClick()
                            }
                        >
                            star
                        </span>
                    </div>
                    <div className="details-modal__info">
                        <p>{genres.join(', ')}</p>
                        <span>·</span>
                        <p className="details-modal__runtime">
                            {details.runtime ? time(details.runtime) : ''}
                        </p>
                    </div>
                </div>

                <h3>Descripción</h3>
                <p className="details-modal__description">{details.overview}</p>

                <p className="details-modal__vote">
                    {details.vote_average?.toFixed(1)}
                </p>
            </div>

            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="warning"
                    sx={{ width: '100%' }}
                >
                    ¡Para guardar tus favoritos logueate primero!
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
        </div>
    );
}
