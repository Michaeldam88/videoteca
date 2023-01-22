import { Link } from "react-router-dom";

export function Header() {
    return (
        <nav className="navbar">
            <img className="navbar__logo" alt="logo" />
            <button className="navbar__login">
                <Link to={'/login'}>{'Login'}</Link>
            </button>
        </nav>
    );
}
