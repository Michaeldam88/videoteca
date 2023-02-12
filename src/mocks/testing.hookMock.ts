export const mockNoUser = null;
export const user = {
    displayName: 'user name',
    photoURL: 'something',
    uid: 'xxx',
};

export const genres = [{ id: 35, name: 'comedia' }];
export const favorites = [899112];
export const watched = [899112];
export const liked = [899112];
export const disliked = [899112];
export const activeOperation = "filter"

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

export const movies = [mockMovie1, mockMovie2];

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

