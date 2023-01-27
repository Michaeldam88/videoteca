export function DetailsModal() {
    return (
        <div className="details-modal">
            <span className="details-modal__close material-symbols-outlined">
                close
            </span>
            <div className="details-modal__main-info">
                <h2 className="details-modal__title">Movie Title</h2>
                <span className="details-modal__age">(2005)</span>
                <span className="details-modal__star material-symbols-outlined">
                    star
                </span>
            </div>
            <div className="details-modal__info">
                <p>Comedia</p>
                <span>·</span>
                <p>1h 57m</p>
            </div>

            <img
                className="details-modal__img"
                src="https://image.tmdb.org/t/p/w500/ngvcBGzUbPsUGaSSLOaVNG2lfLW.jpg"
                alt="pelicula1"
            />
            <h3>Descripción</h3>
            <p className="details-modal__description">
                Bacon ipsum dolor amet salami leberkas filet mignon pork chop
                biltong cupim strip steak. Kevin prosciutto porchetta bacon
                boudin, jowl filet mignon chislic. Tenderloin turkey rump
                sirloin tail burgdoggen hamburger frankfurter kevin sausage ham
                hock chuck prosciutto short ribs. Jerky turkey ground round pork
                shoulder rump. Bacon ipsum doloeeeeer amet salami leberkas filet
                mignon pork chop biltong cupim strip steak.
            </p>
            <h4>Matthew Warchus</h4>
            <p className="details-modal__role">Director</p>
        </div>
    );
}
