import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__element">
                    <Link to={'/home'}>{'Calculadora'}</Link>
                </li>

                <li className="navbar__element">
                    <Link to={'/agencias'}>{'Agencias'}</Link>
                </li>
            </ul>
        </nav>
    );
}
