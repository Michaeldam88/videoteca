import { useContext, useEffect } from 'react';
import { MovieContext } from '../../context/movie.context';

export function FilterModal() {
    const { genres, getGenres, setModal } = useContext(MovieContext);

    useEffect(() => {
        getGenres();
    }, [getGenres]);
    const genresNames = genres.map((element) => element.name);
    const genresOrdered = genresNames.sort((a, b) =>
        a > b ? 1 : a === b ? 0 : -1
    );
    const genresNoDuplicated = [...new Set(genresOrdered)];
    return (
        <div className="filter-modal">
            <h2 className="filter-modal__title">Selecciona Genero</h2>
            <ul className="filter-modal__list">
                <li
                    className="filter-modal__list-element filter-modal__list-element-all"
                    onClick={() => setModal(null)}
                >
                    All
                </li>
                {genresNoDuplicated.map((element) => (
                    <li key={element} className="filter-modal__list-element">{element}</li>
                ))}
            </ul>
        </div>
    );
}
