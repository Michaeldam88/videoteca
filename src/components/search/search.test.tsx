import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import { activeOperation, searchMovie, setActiveOperation, setFilterModal, setPage } from '../../mocks/testing.hookMock';
import { Search } from './search';

describe('Given a movie-card component with user logged', () => {
    const searchMock = 'casa';

    beforeEach(async () => {
        const mockContext = {
            setFilterModal,
            searchMovie,
            setActiveOperation,
            setPage,
            activeOperation,
        } as unknown as MovieContextStructure;
        await render(
            <MovieContext.Provider value={mockContext}>
                <Search filter={searchMock} />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        test('Then if we write something it should call the function setPage', () => {
            const input = screen.getByRole('textbox');
            userEvent.type(input,"home")
            expect(setPage).toHaveBeenCalled();
        });
    });

    describe('When we click on open filter modal', () => {
        test('Then it should call the function set filter modal', () => {
            const filterBtn = screen.getByRole('button', { name: 'filter_alt' });
            userEvent.click(filterBtn);
            expect(setFilterModal).toHaveBeenCalled();
        });
    });
});
