import { SyntheticEvent, useContext } from 'react';
import { MovieContext } from '../../context/movie.context';

export function Search({ filter }: { filter: string }) {
    const { setFilterModal, searchMovie, setActiveOperation, setPage } =
        useContext(MovieContext);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setPage(0);
        searchMovie(element.value, 1);
        setActiveOperation('search');
    };

    return (
        <div className="home__search-container">
            <div className="home__search-box">
                <span className="material-symbols-outlined">saved_search</span>
                <input
                    className="home__search"
                    type="text"
                    placeholder="Buscar"
                    onInput={handleInput}
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
