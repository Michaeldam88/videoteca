import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context/movie.context';

export function Header() {
    const {
        getPopularMovies,
        setPage,
        setActiveOperation,
        logout,
        login,
        user,
    } = useContext(MovieContext);

    const [open, setOpen] = useState('closed');

    const handleClick = (type: string) => {
        setOpen(type);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        setOpen('closed');
    };

    return (
        <header className="header">
            <div className="container align-center">
                <Link to="/home">
                    {
                        <div
                            className="header__logo-container"
                            onClick={() => {
                                setPage(0);
                                getPopularMovies(1);
                                setActiveOperation('popular');
                            }}
                        >
                            <span role="button" className="header__logo material-symbols-outlined">
                                theaters
                            </span>
                            <p className="header__text">Videoteca</p>
                        </div>
                    }
                </Link>
                {user ? (
                    <div className="header__login">
                        <img
                            className="header__login-img"
                            src={user.photoURL ? user.photoURL : undefined}
                            alt="userImage"
                            referrerPolicy="no-referrer"
                        />
                        <p className="header__login-text">
                            {user.displayName ? user.displayName : ''}
                        </p>
                        <span
                            role="button"
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
                        onClick={async () => {                            
                            await login();
                            handleClick('login');
                        }}
                    >
                        <p className="header__login-text">Login</p>
                        <span role="button" className="header__login-logo material-symbols-outlined">
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
                        {`Hasta pronto!`}
                    </Alert>
                </Snackbar>
            </div>
        </header>
    );
}
