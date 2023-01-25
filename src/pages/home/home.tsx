import { Search } from '../../components/search/search';

export default function Home() {
    return (
        <main className="home">
            <Search></Search>
            <h1 className="home__title">Peliculas Populares</h1>
            <ul className="movies-list">
                <li className="movie-card">
                    <img
                        className="movie-card__img"
                        src="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
                        alt="pelicula1"
                    />
                    <div className="movie-card__top">
                        <span className="material-symbols-outlined">star</span>
                    </div>
                    <h4 className="movie-card__tag">terror</h4>
                    <div className="movie-card__bottom">
                        <h2 className="movie-card__title">Film Title</h2>
                        <h3 className="movie-card__year">2012</h3>
                    </div>
                </li>

                <li className="movie-card">
                    <img
                        className="movie-card__img"
                        src="https://image.tmdb.org/t/p/w500/ngvcBGzUbPsUGaSSLOaVNG2lfLW.jpg"
                        alt="pelicula1"
                    />
                    <div className="movie-card__top">
                        <span className="material-symbols-outlined">star</span>
                    </div>
                    <h4 className="movie-card__tag">terror</h4>
                    <div className="movie-card__bottom">
                        <h2 className="movie-card__title">Film Title</h2>
                        <h3 className="movie-card__year">2012</h3>
                    </div>
                </li>
                <li className="movie-card">
                    <img
                        className="movie-card__img"
                        src="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
                        alt="pelicula1"
                    />
                    <div className="movie-card__top">
                        <span className="material-symbols-outlined">star</span>
                    </div>
                    <h4 className="movie-card__tag">terror</h4>
                    <div className="movie-card__bottom">
                        <h2 className="movie-card__title">Film Title</h2>
                        <h3 className="movie-card__year">2012</h3>
                    </div>
                </li>

                <li className="movie-card">
                    <img
                        className="movie-card__img"
                        src="https://image.tmdb.org/t/p/w500/ngvcBGzUbPsUGaSSLOaVNG2lfLW.jpg"
                        alt="pelicula1"
                    />
                    <div className="movie-card__top">
                        <span className="material-symbols-outlined">star</span>
                    </div>
                    <h4 className="movie-card__tag">terror</h4>
                    <div className="movie-card__bottom">
                        <h2 className="movie-card__title">Film Title</h2>
                        <h3 className="movie-card__year">2012</h3>
                    </div>
                </li>

                <li className="movie-card">
                    <img
                        className="movie-card__img"
                        src="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
                        alt="pelicula1"
                    />
                    <div className="movie-card__top">
                        <span className="material-symbols-outlined">star</span>
                    </div>
                    <h4 className="movie-card__tag">terror</h4>
                    <div className="movie-card__bottom">
                        <h2 className="movie-card__title">Film Title</h2>
                        <h3 className="movie-card__year">2012</h3>
                    </div>
                </li>

                <li className="movie-card">
                    <img
                        className="movie-card__img"
                        src="https://image.tmdb.org/t/p/w500/ngvcBGzUbPsUGaSSLOaVNG2lfLW.jpg"
                        alt="pelicula1"
                    />
                    <div className="movie-card__top">
                        <span className="material-symbols-outlined">star</span>
                    </div>
                    <h4 className="movie-card__tag">terror</h4>
                    <div className="movie-card__bottom">
                        <h2 className="movie-card__title">Film Title</h2>
                        <h3 className="movie-card__year">2012</h3>
                    </div>
                </li>
            </ul>
        </main>
    );
}
