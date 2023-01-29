import { GenreStructure } from '../types/genreStructure';

export class TmdbApi {
    async getPopularMovies() {
        const result = await (
            await fetch(
                'https://api.themoviedb.org/3/discover/movie?api_key=80ff9fee839cee60957533079f03548c&language=es-ES&region=ES&page=1&sort_by=popularity.desc&include_adult=false'
            )
        ).json();
        return result;
    }

    async getGenres() {
        const movieGenres = await (
            await fetch(
                'https://api.themoviedb.org/3/genre/movie/list?api_key=80ff9fee839cee60957533079f03548c&language=es-ES'
            )
        ).json();
        const tvGenres = await (
            await fetch(
                'https://api.themoviedb.org/3/genre/tv/list?api_key=80ff9fee839cee60957533079f03548c&language=es-ES'
            )
        ).json();

        const result: Array<GenreStructure> = [];
        movieGenres.genres.map((element: GenreStructure) =>
            result.push(element)
        );
        tvGenres.genres.map((element: GenreStructure) => result.push(element));
        return result;
    }

    async getDetails(id: number) {
        const result = await (
            await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=80ff9fee839cee60957533079f03548c&language=es-ES`
            )
        ).json();
        return result;
    }

    async searchMovie() {
        //
    }
}
