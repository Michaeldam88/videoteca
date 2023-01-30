import { useContext } from 'react';
import { MovieContext } from '../../context/movie.context';

export function FilterModal() {
    const { genres, setFilterModal, getFilteredMovies } =
        useContext(MovieContext);

    const genresNames = genres.map((element) => element.name);
    const genresOrdered = genresNames.sort((a, b) =>
        a > b ? 1 : a === b ? 0 : -1
    );
    const genresNoDuplicated = [...new Set(genresOrdered)];

    const genreId = (genre: string) => {
        const id = genres.filter((element) => element.name === genre);
        return id[0].id.toString();
    };

    return (
        <div className="filter-modal">
            <h2 className="filter-modal__title">Selecciona Genero</h2>
            <ul className="filter-modal__list">
                <li
                    className="filter-modal__list-element filter-modal__list-element-all"
                    onClick={() => setFilterModal(false)}
                >
                    All
                </li>
                {genresNoDuplicated.map((element) => (
                    <li
                        key={element}
                        className="filter-modal__list-element"
                        onClick={() => {
                            setFilterModal(false);
                            getFilteredMovies(genreId(element));
                        }}
                    >
                        {element}
                    </li>
                ))}
            </ul>
        </div>
    );
}
