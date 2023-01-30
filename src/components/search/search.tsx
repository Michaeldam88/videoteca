import { useContext } from 'react';
import { MovieContext } from '../../context/movie.context';

export function Search({filter}:{filter:string}) {
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
                className={
                    filter === 'default'
                        ? `home__filter material-symbols-outlined`
                        : `home__filter material-symbols-fill`
                }
                onClick={() => setFilterModal(true)}
            >
                filter_alt
            </span>
        </div>
    );
}
