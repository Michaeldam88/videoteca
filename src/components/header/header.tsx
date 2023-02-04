import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useContext, useState } from 'react';
import { MovieContext } from '../../context/movie.context';
import { useAuth } from '../../hooks/use.Auth';

export function Header() {
    const { getPopularMovies, setPage, setActiveOperation } =
        useContext(MovieContext);
    const { logout, login, user } = useAuth();
    const [open, setOpen] = useState('closed');

    const handleClick = (type: string) => {
        setOpen(type);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen('closed');
    };

    return (
        <header className="header">
            <div className="container align-center">
                <div
                    className="header__logo-container"
                    onClick={() => {
                        setPage(0);
                        getPopularMovies(1);
                        setActiveOperation('popular');
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
                            src={user.photoURL ? user.photoURL : undefined}
                            alt="userImage"
                        />
                        <p className="header__login-text">
                            {user.displayName ? user.displayName : ''}
                        </p>
                        <span
                            className="header__login-logo material-symbols-outlined"
                            onClick={() => {
                                handleClick('logout');
                                logout();
                            }}
                        >
                            logout
                        </span>
                    </div>
                ) : (
                    <div
                        className="header__login"
                        onClick={() => {
                            login();
                            handleClick('login');
                        }}
                    >
                        <p className="header__login-text">Login</p>
                        <span className="header__login-logo material-symbols-outlined">
                            person
                        </span>
                    </div>
                )}
                <Snackbar
                    open={open === 'login'}
                    autoHideDuration={3000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: '100%' }}
                    >
                        {`Bienvenido ${user?.displayName}!`}
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={open === 'logout'}
                    autoHideDuration={3000}
                    onClose={handleClose}
                >
                    {}
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: '100%' }}
                    >
                        {`Hasta pronto ${user?.displayName}!`}
                    </Alert>
                </Snackbar>
            </div>
        </header>
    );
}
