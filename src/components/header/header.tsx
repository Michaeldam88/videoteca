import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <img className="header__logo" alt="logo" />
            <button className="header__login">
                <Link to={'/login'}>{'Login'}</Link>
            </button>
        </header>
    );
}
