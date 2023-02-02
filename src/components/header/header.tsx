import { useContext } from 'react';
import { MovieContext } from '../../context/movie.context';
import { useAuth } from '../../hooks/use.Auth';

export function Header() {
    const { getPopularMovies, user, login } = useContext(MovieContext);
    const { logout } = useAuth();

    if (user) console.log('logueado-header', user);

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
                {user ? (
                    <div>
                        <p>{`Bienvenido ${user.displayName}`}</p>
                        <img
                            src={user.photoURL ? user.photoURL : undefined}
                            alt="userImage"
                        />
                        <span
                            className="header__login material-symbols-outlined"
                            onClick={() => logout()}
                        >
                            logout
                        </span>
                    </div>
                ) : (
                    <span
                        className="header__login material-symbols-outlined"
                        onClick={() => login()}
                    >
                        person
                    </span>
                )}
            </div>
        </header>
    );
}
