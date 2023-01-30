import { useContext, useEffect } from 'react';
import { MovieContext } from '../../context/movie.context';

export function DetailsModal({ id }: { id: number }) {
    const { getDetails, details } = useContext(MovieContext);

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

    return (
        <div className="details-modal">
            <span
                className="details-modal__close material-symbols-outlined"
                // onClick={() => setModal(null)}
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
                        onClick={() => console.log('star-modal')}
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
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
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
                            onClick={() => console.log('star-modal')}
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
        </div>
    );
}
