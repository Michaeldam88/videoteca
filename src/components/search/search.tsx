import {useContext } from 'react';
import { MovieContext } from '../../context/movie.context';

export function Search() {
    const { setFilterModal } = useContext(MovieContext);

    

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
                onClick={() =>
                    setFilterModal(true)
                }
            >
                filter_alt
            </span>
        </div>
    );
}
