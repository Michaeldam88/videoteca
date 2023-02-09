import { render, screen } from '@testing-library/react';
import { MovieCard } from './movie-card';

describe('Given movie-card component', () => {
    const mockMovie = {
        adult: false,
        backdrop_path: '/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg',
        genre_ids: [28, 35, 80, 53],
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

    const MockSetIdDetails = jest.fn();

    beforeEach(() => {
        render(<MovieCard movie={mockMovie} setIdDetails={MockSetIdDetails} />);
    });

    describe('When it has been render', () => {
        test('Then its child components should be render also with its image', () => {
            const img = screen.getByRole('img');
            expect(img).toBeInTheDocument();
        });

        test('Then if we click on the open modal button the detail modal should open', () => {
            const handleClick = jest.fn()
            const openModal = screen.getByRole('span');           
        });
    });
});
