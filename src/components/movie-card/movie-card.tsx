import { useContext } from 'react';
import { MovieContext } from '../../context/movie.context';
import { MovieStructure } from '../../types/movieStructure';

export function MovieCard({
    movie,
    setIdDetails,
}: {
    movie: MovieStructure;
    setIdDetails: React.Dispatch<React.SetStateAction<number | null>>;
}) {
    
    const { genres } = useContext(MovieContext);

    const genreFiltered = genres.filter(
        (element) => element.id === movie.genre_ids[0]
    );

    const genre = genreFiltered.length ? genreFiltered[0].name : '';

    return (
        <li className="movie-card">
            <img
                className="movie-card__img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />

            <div className="movie-card__top">
                <span
                    className="movie-card__star material-symbols-outlined"
                    onClick={() => console.log('star')}
                >
                    star
                </span>
            </div>

            <div
                className="movie-card__bottom"
                onClick={() => setIdDetails(movie.id)}
            >
                <h4 className="movie-card__tag">{genre}</h4>
                <h2 className="movie-card__title">
                    {movie.title || movie.name}
                </h2>
                <h3 className="movie-card__year">
                    {movie.release_date
                        ? movie.release_date.slice(0, 4)
                        : ""}
                    {movie.first_air_date
                        ? movie.first_air_date.slice(0, 4)
                        : ""}
                </h3>
            </div>
        </li>
    );
}
