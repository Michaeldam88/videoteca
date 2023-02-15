import { TmdbApi } from '../services/tmdbApi';

export const user = {
    uid: 'pI9hYahFETjQbQZ0i6EAXS72',
    email: 'xxx@gmail.com',
    emailVerified: true,
    displayName: 'name surname',
    isAnonymous: false,
    photoURL: 'url',
    providerData: [
        {
            providerId: 'google.com',
            uid: '15587188649956592060',
            displayName: 'name surname',
            email: 'xxx@gmail.com',
            phoneNumber: null,
            photoURL: 'url',
        },
    ],
    stsTokenManager: {
        refreshToken:
            'APJWN8f4a6jMxHz302dddUiXVFgwQg4MUM-Oeqg83YTAF2oyikMOdXKthIfVmIKRuvTacJq3wZ63y1B5rfH6zlEerzXdnwuRuRQjyg2-bGrasPJoTuYGgZdNnwpiNi-K4YMbHbxojDDKq-UtQKiNo1y-rQyzdYoh6mDegFaEFkMl1HqF4-Eap8no2UV8nxvktvcf-N4j54JR7ZzJP54arhrwn7lko57sbGnP7yALcZgol_yLdtcteVLYOz3WCAwmoNgODGclDHaJo78_fszeBhESul18B68pkQTnjYAh1zmo3wJRSYcaWkL7oxZlVrCddTGoSR26VnjQAyjDXrgUcliFjPxyzyevUrt_7c8Ega9TTSxxml0y2tBoDzhu41UK63ZFLAVpw0PSUfRnk8po8wtFmlkkoWaUz6HjV12y8iAjArOQz2umumn2eY',
        accessToken:
            'eyJhbGciOiJSUzI1NddsiIsImtpZCI6IjVhNTA5ZjAxOWY3MGQ3NzlkODBmMTUyZDFhNWQzMzgxMWFiN2NlZjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWljaGFlbCBsb2dpcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA3TWVqVWlyWUtvcE1oSVROSWtSeGwyblVoT2ttVzZiZ2VPVUw2ej1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS92aWRlb3RlY2EtZTBmYTEiLCJhdWQiOiJ2aWRlb3RlY2EtZTBmYTEiLCJhdXRoX3RpbWUiOjE2NzU3NTg2NjcsInVzZXJfaWQiOiJwSTloWWFPMmdMaEZFVGpRYlFaMGk2RUFYUzcyIiwic3ViIjoicEk5aFlhTzJnTGhGRVRqUWJRWjBpNkVBWFM3MiIsImlhdCI6MTY3NTc1ODY2NywiZXhwIjoxNjc1NzYyMjY3LCJlbWFpbCI6ImxvZ2lzbWljaGFlbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwNDk4NzE4ODY0OTk1NjU5MjA2MCJdLCJlbWFpbCI6WyJsb2dpc21pY2hhZWxAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.IGox6crLSHWz752sj2cyVKBRyDc7qaW84Mb3wWvpXldYuw42iHtZiJvSSfr-iB8mnS3ZeEXVmxQvddM9uuPDP3fB0foau5zz1SYTedl02_fqa1Uy4D4ZmHUNqp68Qmz2mi8LGMSpjWcDLbYnT9WpuiYLNSlTDv8MGtpozAG-5xDVMwLyQYFvkASWgAWaOu_aqJ8Fgq474a_GkMjMcbWBe0tcczcd7z0g0wti1FO07l-vikJt7yXc1eHOn2Pyd-E6qkgkbfUKuPoeGB0ApUAApXwJwJMvPJdZwR0oKEzPYZM5tdh8ETiofPfwEZidPFNPHXROxdB-W-Npnuxmn2H4CA',
        expirationTime: 1675762266639,
    },
    createdAt: '16748402d84626',
    lastLoginAt: '167575d8667638',
    apiKey: 'AIzaSyBK_ZFAdbIjjs1Oi7x-GalFZZS1zCb07-Zg',
    appName: '[DEFAULT]',
};

export const genres = [{ id: 35, name: 'comedia' }];
export const favorites = [
    899112, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
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
    poster_path: '',
    release_date: '',
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

export const details3 = {
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
    first_air_date:"xxx",
    genre_ids:[1,2,3],
    name:"xxx",
};

export const detailList = [details3];
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

export const apiGenresResponse = {genres:[{ id: 35, name: 'comedia' }]}

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
    (TmdbApi.prototype.getDetails as jest.Mock).mockResolvedValue(details3);
    (TmdbApi.prototype.searchMovie as jest.Mock).mockResolvedValue(apiResponse);
    (TmdbApi.prototype.searchMovie as jest.Mock).mockResolvedValue(apiResponse);
    (TmdbApi.prototype.filterGenre as jest.Mock).mockResolvedValue(apiResponse);
};

