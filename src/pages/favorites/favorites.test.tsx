import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    favorites,
    favoritesList,
    getFavoritesList,
    user,
} from '../../mocks/testing.hookMock';
import Favorites from './favorites';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FavoritesCard } from '../../components/favorites-card/favorites-card';

jest.mock('../../components/favorites-card/favorites-card');

describe('Given a home component', () => {
    beforeEach(async () => {
        const mockContext = {
            user,
            favorites,
            getFavoritesList,
            favoritesList,
        } as unknown as MovieContextStructure;
        await render(
            <MovieContext.Provider value={mockContext}>
                <Favorites />
            </MovieContext.Provider>
        );
    });

    describe('When it has been rendered', () => {
        test('Then if we click on the next page button should call the function setPage', () => {
            const nextPageBtn = screen.getByTitle('Go to next page');
            userEvent.click(nextPageBtn);
            expect(getFavoritesList).toHaveBeenCalled();
        });
    });
});
