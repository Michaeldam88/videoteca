import { useContext } from 'react';
import { MovieContext } from '../../context/movie.context';

export function Search() {
    const { setModal } = useContext(MovieContext);

    return (
        <div className="home__search-container">
            <div className="home__search-box">
                <span className="material-symbols-outlined">saved_search</span>
                <input
                    className="home__search"
                    type="text"
                    placeholder="Buscar"
                />
            </div>
            <span
                className="home__filter material-symbols-outlined"
                onClick={() => setModal('filter')}
            >
                filter_alt
            </span>
        </div>
    );
}
