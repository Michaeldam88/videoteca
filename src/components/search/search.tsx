import { ChangeEvent, useContext, useState } from 'react';
import { MovieContext } from '../../context/movie.context';

export function Search({ filter }: { filter: string }) {
    const [inputValue, setInputValue] = useState("");

    const {
        setFilterModal,
        searchMovie,
        setActiveOperation,
        setPage,
        activeOperation,
    } = useContext(MovieContext);

    const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
        const element = ev.target
        setPage(0);
        searchMovie(element.value, 1);
        setActiveOperation('search');
        setInputValue(element.value);
    };

    return (
        <div className="home__search-container">
            <div className="home__search-box">
                <span className="material-symbols-outlined">saved_search</span>
                <input
                    className="home__search"
                    type="text"
                    placeholder="Buscar"
                    onChange={handleInput}
                    value={activeOperation !== "search"? "":inputValue}
                />
            </div>
            <span
                className={
                    activeOperation !== 'filter'
                        ? `home__filter material-symbols-outlined`
                        : `home__filter material-symbols-outlined --filled `
                }
                onClick={() => setFilterModal(true)}
            >
                filter_alt
            </span>
        </div>
    );
}
