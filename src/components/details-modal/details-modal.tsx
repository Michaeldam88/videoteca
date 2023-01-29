import { useContext, useEffect } from 'react';
import { MovieContext } from '../../context/movie.context';

export function DetailsModal({ id }: { id: number }) {
    const { getDetails, details } = useContext(MovieContext);

    useEffect(() => {
        getDetails(id);
    }, [getDetails, id]);

    console.log(details);

    const time = (totalMinutes:number) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    };

    return (
        <div className="details-modal">
            <span className="details-modal__close material-symbols-outlined">
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
                    <span className="details-modal__star material-symbols-outlined">
                        star
                    </span>
                </div>
                <div className="details-modal__info">
                    <p>XXX</p>
                    <span>·</span>
                    <p>{time(details.runtime)}</p>
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
                        <span className="details-modal__star material-symbols-outlined">
                            star
                        </span>
                    </div>
                    <div className="details-modal__info">
                        <p>Comedia</p>
                        <span>·</span>
                        <p>{time(details.runtime)}</p>
                    </div>
                </div>

                <h3>Descripción</h3>
                <p className="details-modal__description">
                    Bacon ipsum dolor amet salami leberkas filet mignon pork
                    chop biltong cupim strip steak. Kevin prosciutto porchetta
                    bacon boudin, jowl filet mignon chislic. Tenderloin turkey
                    rump sirloin tail burgdoggen hamburger frankfurter kevin
                    sausage ham hock chuck prosciutto short ribs. Jerky turkey
                    ground round pork shoulder rump. Bacon ipsum doloeeeeer amet
                    salami leberkas filet mignon pork chop biltong cupim strip
                    steak.
                </p>
                <h4>Matthew Warchus</h4>
                <p className="details-modal__role">Director</p>
            </div>
        </div>
    );
}
