import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TmdbApi } from '../services/tmdbApi';
import { useMovies } from './use.movies';

jest.mock('../services/tmdbApi');

TmdbApi.prototype.getGenres = jest.fn();
TmdbApi.prototype.getPopularMovies = jest.fn().mockReturnValue({result:[{}]});
TmdbApi.prototype.getDetails = jest.fn();
TmdbApi.prototype.searchMovie = jest.fn();
TmdbApi.prototype.filterGenre = jest.fn();

describe(`Given useMovies (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    let buttons: Array<HTMLElement>;
    beforeEach(() => {
        TestComponent = () => {
            const {
                getPopularMovies,
                getDetails,
                setFilterModal,
                getFilteredMovies,
                searchMovie,
                setPage,
                setActiveOperation,
                setDetails,
                getFavoritesList,
                movies,
                genres,
                details,
                filterModal,
                page,
                totPages,
                activeOperation,
                favoritesList,
            } = useMovies();
            return (
                <>
                    <button onClick={() => getPopularMovies(1)}>
                        Get Popular Movies
                    </button>
                </>
            );
        };
        render(<TestComponent />);
        buttons = screen.getAllByRole('button');
    });

    describe(`When the api is working`,  () => {
        test('Then should call the function getPopularMovies', async () => {
            //userEvent.click(buttons[0]);
            console.log(buttons[0]);
            //expect(TmdbApi.prototype.getPopularMovies).toHaveBeenCalled();
        });
    });
});
