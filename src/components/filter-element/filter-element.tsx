export function FilterElement({ genre }: { genre: string }) {
    return (
        <li className="filter-modal__list-element">
            {genre.length ? genre : ''}
        </li>
    );
}
