import { TmdbApi } from '../services/tmdbApi';

export const user = {
    displayName: 'user name',
    photoURL: 'something',
    uid: 'xxx',
};

export const genres = [{ id: 35, name: 'comedia' }];
export const favorites = [899112,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
export const watched = [899112];
export const liked = [899112];
export const disliked = [899112];
export const activeOperation = 'popular';
export const page = 1;
export const totPages = 50;
export const filterModal = false;

export const mockMovie1 = {
    adult: false,
    backdrop_path: '/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg',
    genre_ids: [35, 28, 80, 53],
    id: 899112,
    original_language: 'en',
    original_title: 'Violent Night',
    overview:
        'está en el edificio y a punto de demostrar por qué este Santa Claus, no es ningún santo.',
    popularity: 847.073,
    poster_path: '/zM1aKY3uhOie3X1gLPKTl5MaEZZ.jpg',
    release_date: '2022-12-02',
    title: 'Noche de paz',
    video: false,
    vote_average: 7.6,
    vote_count: 1132,
};

export const mockMovie2 = {
    adult: false,
    backdrop_path: '/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg',
    genre_ids: [],
    id: 8991166,
    original_language: 'en',
    original_title: 'Violent Night',
    overview: 'texto del modal',
    popularity: 847.073,
    poster_path: '/zM1aKY3uhOie3X1gLPKTl5MaEZZ.jpg',
    release_date: '2022-12-02',
    title: 'Noche de paz',
    video: false,
    vote_average: 7.6,
    vote_count: 1132,
};

export const details1 = {
    adult: false,
    backdrop_path: '/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg',
    genres: [
        {
            id: 878,
            name: 'Comedia',
        },
        {
            id: 27,
            name: 'Terror',
        },
        {
            id: 35,
            name: 'Ciencia ficción',
        },
    ],
    id: 899112,
    original_language: 'en',
    original_title: 'Violent Night',
    overview:
        'está en el edificio y a punto de demostrar por qué este Santa Claus, no es ningún santo.',
    popularity: 847.073,
    poster_path: '/zM1aKY3uhOie3X1gLPKTl5MaEZZ.jpg',
    release_date: '2022-12-02',
    title: 'Noche de paz',
    video: false,
    vote_average: 7.6,
    vote_count: 1132,
    runtime: 101,
};

export const details2 = {
    adult: false,
    backdrop_path: '/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg',
    genres: [
        {
            id: 878,
            name: 'Ciencia ficción',
        },
        {
            id: 27,
            name: 'Terror',
        },
        {
            id: 35,
            name: 'Comedia',
        },
    ],
    id: 89911233,
    original_language: 'en',
    original_title: 'Violent Night',
    overview:
        'está en el edificio y a punto de demostrar por qué este Santa Claus, no es ningún santo.',
    popularity: 847.073,
    poster_path: '/zM1aKY3uhOie3X1gLPKTl5MaEZZ.jpg',
    release_date: '2022-12-02',
    title: 'Noche de paz',
    video: false,
    vote_average: 7.6,
    vote_count: 1132,
    runtime: 101,
};

export const movies = [mockMovie1];

export const getDetails = jest.fn();
export const setDetails = jest.fn();
export const setFilterModal = jest.fn();
export const getFilteredMovies = jest.fn();
export const getPopularMovies = jest.fn();
export const setPage = jest.fn();
export const setActiveOperation = jest.fn();
export const login = jest.fn();
export const searchMovie = jest.fn();
export const logout = jest.fn();
export const details = details1;
export const getFavoritesList = jest.fn();
export const favoritesList = [details1];

export const apiResponse = {
    page: 1,
    results: [
        {
            adult: false,
            backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
            genre_ids: [28, 12, 878],
            id: 505642,
            original_language: 'en',
            original_title: 'Black Panther: Wakanda Forever',
            overview:
                'La reina Ramonda, Shuri, M’Baku, Okoye y las Dora Milaje, luchan para proteger su nación de la injerencia de potencias mundiales a raíz de la muerte del rey T’Challa. Mientras los wakandianos se esfuerzan por adaptarse a su nueva etapa, los héroes deben actuar unidos, con la ayuda del Perro de la Guerra Nakia y Everett Ross, y forzar un nuevo destino para el reino de Wakanda.',
            popularity: 7141.639,
            poster_path: '/iQ4ydo7nSxIlFyq8sZcu0rCK6AN.jpg',
            release_date: '2022-11-09',
            title: 'Black Panther: Wakanda Forever',
            video: false,
            vote_average: 7.5,
            vote_count: 2879,
        },
    ],
    total_pages: 1256,
    total_results: 25102,
};

export const mockValidRepoResponse = () => {
    (TmdbApi.prototype.getGenres as jest.Mock).mockResolvedValue({
        genres: [
            { id: 28, name: 'Acción' },
            { id: 12, name: 'Aventura' },
        ],
    });
    (TmdbApi.prototype.getPopularMovies as jest.Mock).mockResolvedValue(
        apiResponse
    );
    (TmdbApi.prototype.getDetails as jest.Mock).mockResolvedValue({
        adult: false,
        backdrop_path: '/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg',
        belongs_to_collection: {
            id: 94602,
            name: 'El gato con botas - Colección',
            poster_path: '/anHwj9IupRoRZZ98WTBvHpTiE6A.jpg',
            backdrop_path: '/feU1DWV5zMWxXUHJyAIk3dHRQ9c.jpg',
        },
        budget: 90000000,
        genres: [
            {
                id: 16,
                name: 'Animación',
            },
            {
                id: 12,
                name: 'Aventura',
            },
            {
                id: 35,
                name: 'Comedia',
            },
            {
                id: 10751,
                name: 'Familia',
            },
            {
                id: 14,
                name: 'Fantasía',
            },
        ],
        homepage:
            'https://www.universalpictures.es/micro/el-gato-con-botas-el-ultimo-deseo',
        id: 315162,
        imdb_id: 'tt3915174',
        original_language: 'en',
        original_title: 'Puss in Boots: The Last Wish',
        overview:
            "Secuela de 'El gato con botas' (2011). El Gato con Botas descubre que su pasión por la aventura le ha pasado factura: ha consumido ocho de sus nueve vidas, por ello emprende un viaje épico para encontrar el mítico Último Deseo y restaurar sus nueve vidas...",
        popularity: 4062.737,
        poster_path: '/lyP4WNmUiiOgl4g2z7ywE0z6SGF.jpg',
        production_companies: [
            {
                id: 33,
                logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
                name: 'Universal Pictures',
                origin_country: 'US',
            },
            {
                id: 521,
                logo_path: '/kP7t6RwGz2AvvTkvnI1uteEwHet.png',
                name: 'DreamWorks Animation',
                origin_country: 'US',
            },
        ],
        production_countries: [
            {
                iso_3166_1: 'US',
                name: 'United States of America',
            },
        ],
        release_date: '2022-12-07',
        revenue: 369105725,
        runtime: 103,
        spoken_languages: [
            {
                english_name: 'English',
                iso_639_1: 'en',
                name: 'English',
            },
            {
                english_name: 'Spanish',
                iso_639_1: 'es',
                name: 'Español',
            },
        ],
        status: 'Released',
        tagline: '',
        title: 'El Gato con Botas: El último deseo',
        video: false,
        vote_average: 8.52,
        vote_count: 3579,
    });
    (TmdbApi.prototype.searchMovie as jest.Mock).mockResolvedValue(apiResponse);
    (TmdbApi.prototype.searchMovie as jest.Mock).mockResolvedValue(apiResponse);
    (TmdbApi.prototype.filterGenre as jest.Mock).mockResolvedValue(apiResponse);
};

const error = new Error('Testing errors');

export const mockNoValidRepoResponse = () => {
    (TmdbApi.prototype.getGenres as jest.Mock).mockResolvedValue(error);
    (TmdbApi.prototype.getPopularMovies as jest.Mock).mockResolvedValue(error);
    (TmdbApi.prototype.getDetails as jest.Mock).mockResolvedValue(error);
    (TmdbApi.prototype.searchMovie as jest.Mock).mockResolvedValue(error);
    (TmdbApi.prototype.filterGenre as jest.Mock).mockResolvedValue(error);
};
