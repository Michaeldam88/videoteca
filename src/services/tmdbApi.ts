export class TmdbApi {
    async getPopularMovies() {
        const result = await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=80ff9fee839cee60957533079f03548c&language=es-ES&page=1")).json()
        return result
    }

    async getGenres() {
        const result = await(
            await fetch(
                'https://api.themoviedb.org/3/genre/movie/list?api_key=80ff9fee839cee60957533079f03548c&language=es-ES'
            )
        ).json();        
        return result;
    }

    async searchMovie() {
        //
    }
}

