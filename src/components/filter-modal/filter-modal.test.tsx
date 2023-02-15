import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    genres,
    getFilteredMovies,
    getPopularMovies,
    setActiveOperation,
    setFilterModal,
    setPage,
} from '../../mocks/testing.hookMock';
import { FilterModal } from './filter-modal';

describe('Given a filter modal component', () => {
    const MockSetFilter = jest.fn();

    beforeEach(() => {
        const mockContext = {
            genres,
            setFilterModal,
            getFilteredMovies,
            getPopularMovies,
            setPage,
            setActiveOperation,
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <FilterModal filter={MockSetFilter} />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        test('Then its should render also with its title', () => {
            const title = screen.getByRole('heading', {
                name: 'Selecciona Genero',
            });
            expect(title).toBeInTheDocument();
        });
    });

    describe('When we click to all', () => {
        test('Then Should set the filter name to default', () => {
            const allBtn = screen.getByRole('button', {
                name: 'All',
            });
            userEvent.click(allBtn);
            expect(MockSetFilter).toHaveBeenCalled();
        });
    });

    describe('When we click to a category', () => {
        test('Then Should set the filer name to Comedia', () => {
            const comediaBtn = screen.getByRole('button', {
                name: 'comedia',
            });
            userEvent.click(comediaBtn);
            expect(MockSetFilter).toHaveBeenCalled();
        });
    });
});
