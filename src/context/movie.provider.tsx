import { useMemo } from "react";
import { useMovies } from "../hooks/use.movies";
import { MovieContext } from "./movie.context";

export function MovieContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { movies, genres, getPopularMovies } =
        useMovies();

    const context = useMemo(
        () => ({
            getPopularMovies,
            movies,
            genres,
        }),
        [getPopularMovies, movies, genres]
    );

    return (
        <MovieContext.Provider value={context}>
            {children}
        </MovieContext.Provider>
    );
}
