import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    searchMovie,
    setActiveOperation,
    setFilterModal,
    setPage,
} from '../../mocks/testing.hookMock';
import { Search } from './search';

describe('Given a search component', () => {
    const searchMock = 'casa';

    beforeEach(() => {
        const mockContext = {
            setFilterModal,
            searchMovie,
            setActiveOperation,
            setPage,
            activeOperation: 'search',
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <Search filter={searchMock} />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        test('Then if we write something it should call the function setPage', () => {
            const input = screen.getByRole('textbox');
            userEvent.type(input, 'home');
            expect(setPage).toHaveBeenCalled();
        });
    });

    describe('When we click on open filter modal', () => {
        test('Then it should call the function set filter modal', () => {
            const filterBtn = screen.getByRole('button', {
                name: 'filter_alt',
            });
            userEvent.click(filterBtn);
            expect(setFilterModal).toHaveBeenCalled();
        });
    });
});

describe('Given a search component with filter action selected', () => {
    const searchMock = 'casa';

    beforeEach(() => {
        const mockContext = {
            setFilterModal,
            searchMovie,
            setActiveOperation,
            setPage,
            activeOperation: 'filter',
        } as unknown as MovieContextStructure;
        render(
            <MovieContext.Provider value={mockContext}>
                <Search filter={searchMock} />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        test('Then the filter button should render wit the class filled', () => {
            const filterBtn = screen.getByRole('button');
            expect(filterBtn).toHaveClass('material-symbols-outlined --filled');
        });
    });
});
