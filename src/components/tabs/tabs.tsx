import { Link } from 'react-router-dom';

export function Tabs() {
    return (
        <nav className="tabs">
            <ul className="tabs__list">
                <li className="tabs__element">
                    <Link to={'/home'}>{'Videoteca'}</Link>
                </li>

                <li className="tabs__element">
                    <Link to={'/favorites'}>{'Favoritos'}</Link>
                </li>
            </ul>
        </nav>
    );
}
