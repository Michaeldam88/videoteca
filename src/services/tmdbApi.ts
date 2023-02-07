import { trackPromise } from 'react-promise-tracker';

export class TmdbApi {
    async getPopularMovies(page: number) {
        const result = await (
            await trackPromise(
                fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=80ff9fee839cee60957533079f03548c&language=es-ES&region=ES&page=${page}&sort_by=popularity.desc&include_adult=false`
                )
            )
        ).json();
        return result;
    }

    async getGenres() {
        const result = await (
            await trackPromise(
                fetch(
                    'https://api.themoviedb.org/3/genre/movie/list?api_key=80ff9fee839cee60957533079f03548c&language=es-ES'
                )
            )
        ).json();

        return result.genres;
    }

    async getDetails(id: number) {
        const result = await (
            await trackPromise(
                fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=80ff9fee839cee60957533079f03548c&language=es-ES`
                )
            )
        ).json();
        return result;
    }

    async searchMovie(keyword: string, page: number) {
        const result = await (
            await trackPromise(
                fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=80ff9fee839cee60957533079f03548c&language=es-ES&query=${encodeURI(
                        keyword
                    )}&page=${page}&include_adult=false`
                )
            )
        ).json();

        return result;
    }

    async filterGenre(genre: string, page: number) {
        const result = await (
            await trackPromise(
                fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=80ff9fee839cee60957533079f03548c&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`
                )
            )
        ).json();

        return result;
    }
}
