import { useContext } from 'react';
import { MovieContext } from '../../context/movie.context';
import { login } from '../../services/firebaseAuth';

export function Header() {
    const { getPopularMovies } = useContext(MovieContext);

    return (
        <header className="header">
            <div className="container align-center">
                <div
                    className="header__logo-container"
                    onClick={() => getPopularMovies()}
                >
                    <span className="header__logo material-symbols-outlined">
                        theaters
                    </span>
                    <p className="header__text">Videoteca</p>
                </div>

                <span
                    className="header__login material-symbols-outlined"
                    onClick={() => login()}
                >
                    person
                </span>
            </div>
        </header>
    );
}
