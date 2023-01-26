export function FilterModal() {
    return (
        <div className="filter-modal">
            <h2 className="filter-modal__title">Selecciona Genero</h2>
            <ul className="filter-modal__list">
                <li className="filter-modal__list-element filter-modal__list-element-all">
                    All
                </li>
                <li className="filter-modal__list-element">Terror</li>
                <li className="filter-modal__list-element">Actión</li>
            </ul>
            <button className="filter-modal__btn">Filtrar</button>
        </div>
    );
}
