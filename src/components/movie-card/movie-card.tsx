import { useContext } from "react";
import { MovieContext } from "../../context/movie.context";
import { MovieStructure } from "../../types/movieStructure";


export function MovieCard ({movie}:{movie:MovieStructure}) {   
    
    const { genres } = useContext(MovieContext);
    console.log(genres)

    return (
        <li className="movie-card">
            <img
                className="movie-card__img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="movie-card__top">
                <span className="material-symbols-outlined">star</span>
            </div>
            <h4 className="movie-card__tag">{movie.genre_ids[0]}</h4>
            <div className="movie-card__bottom">
                <h2 className="movie-card__title">{movie.title}</h2>
                <h3 className="movie-card__year">
                    {movie.release_date.slice(0, 4)}
                </h3>
            </div>
        </li>
    );
} 
