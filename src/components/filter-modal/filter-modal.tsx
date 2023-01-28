import { useContext, useEffect } from 'react';
import { MovieContext } from '../../context/movie.context';
import { FilterElement } from '../filter-element/filter-element';

export function FilterModal() {
    const { genres, getGenres } = useContext(MovieContext);

    useEffect(() => {
        getGenres();
    }, [getGenres]);

    return (
        <div className="filter-modal">
            <h2 className="filter-modal__title">Selecciona Genero</h2>
            <ul className="filter-modal__list">
                <li className="filter-modal__list-element filter-modal__list-element-all">
                    All
                </li>
                {/* { genres.map((element) => {
                        <FilterElement
                            key={element.id}
                            genre={element.name}
                        ></FilterElement>;
                    })                                 
                } */}
            </ul>
            <button className="filter-modal__btn">Filtrar</button>
        </div>
    );
}
