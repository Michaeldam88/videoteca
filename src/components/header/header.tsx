import { useContext } from 'react';
import { MovieContext } from '../../context/movie.context';
import { useAuth } from '../../hooks/use.Auth';

export function Header() {
    const { getPopularMovies, page, setPage } = useContext(MovieContext);
    const { logout, login, user } = useAuth();

    return (
        <header className="header">
            <div className="container align-center">
                <div
                    className="header__logo-container"
                    onClick={() => {                        
                        setPage(0);
                        getPopularMovies(page + 1);
                    }}
                >
                    <span className="header__logo material-symbols-outlined">
                        theaters
                    </span>
                    <p className="header__text">Videoteca</p>
                </div>
                {user ? (
                    <div className="header__login">
                        <img
                            className="header__login-img"
                            src={user?.photoURL ? user.photoURL : undefined}
                            alt="userImage"
                        />
                        <p className="header__login-text">{`Bienvenido ${user.displayName}`}</p>
                        <span
                            className="header__login-logo material-symbols-outlined"
                            onClick={() => logout()}
                        >
                            logout
                        </span>
                    </div>
                ) : (
                    <div className="header__login">
                        <p className="header__login-text">Login</p>
                        <span
                            className="header__login-logo material-symbols-outlined"
                            onClick={() => login()}
                        >
                            person
                        </span>
                    </div>
                )}
            </div>
        </header>
    );
}
