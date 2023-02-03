import { useContext } from 'react';
import { MovieContext } from '../../context/movie.context';

export function FilterModal({
    filter,
}: {
    filter: React.Dispatch<React.SetStateAction<string>>;
}) {
    const { genres, setFilterModal, getFilteredMovies, getPopularMovies,page, setPage,setActiveOperation } =
        useContext(MovieContext);

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
                    onClick={() => {
                        setActiveOperation("filter")
                        setPage(0)
                        setFilterModal(false);
                        getPopularMovies(page+1);
                        filter('default');
                    }}
                >
                    All
                </li>
                {genres.map((element) => (
                    <li
                        key={element.name}
                        className="filter-modal__list-element"
                        onClick={() => {
                            setPage(0);
                            setFilterModal(false);
                            filter(element.name);
                            getFilteredMovies(genreId(element.name),page+1);
                        }}
                    >
                        {element.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
