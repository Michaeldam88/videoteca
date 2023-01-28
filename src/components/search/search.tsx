import { useContext } from 'react';
import { MovieContext } from '../../context/movie.context';
import { FilterModal } from '../filter-modal/filter-modal';

export function Search() {
    //const { setModal } = useContext(MovieContext);

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
                // onClick={setModal(<FilterModal></FilterModal>)}
            >
                filter_alt
            </span>
        </div>
    );
}
