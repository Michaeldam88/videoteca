import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import {
    MovieContext,
    MovieContextStructure,
} from '../../context/movie.context';
import {
    activeOperation,
    setActiveOperation,
} from '../../mocks/testing.hookMock';
import { TabsMenu } from './tabs-menu';

describe('Given a tabs-menu component', () => {
    beforeEach(async () => {
        const mockContext = {
            activeOperation,
            setActiveOperation,
        } as unknown as MovieContextStructure;
        await render(
            <BrowserRouter>
                <MovieContext.Provider value={mockContext}>
                    <>
                        <TabsMenu />
                    </>
                </MovieContext.Provider>
            </BrowserRouter>
        );
    });

    describe('When it has been rendered', () => {
        test('Then if we click on the favorites link it should appear as selected', () => {
            const gotoFavoritesButton = screen.getByRole('button', {
                name: 'hotel_class',
            });

            userEvent.click(gotoFavoritesButton);
            const favoritesTab = screen.getAllByRole('tab');
            expect(favoritesTab[1]).toHaveAttribute('aria-selected', 'true');
        });

        test('Then if we click on the movie link it should appear as selected', () => {
            const gotoFavoritesButton = screen.getByRole('button', {
                name: 'movie_filter',
            });

            userEvent.click(gotoFavoritesButton);
            const favoritesTab = screen.getAllByRole('tab');
            expect(favoritesTab[0]).toHaveAttribute('aria-selected', 'true');
        });
    });
});

describe('Given a tabs-menu component with filter activeOperation selected', () => {
    beforeEach(async () => {
        const mockContext = {
            activeOperation: 'filter',
            setActiveOperation,
        } as unknown as MovieContextStructure;
        await render(
            <BrowserRouter>
                <MovieContext.Provider value={mockContext}>
                    <>
                        <TabsMenu />
                    </>
                </MovieContext.Provider>
            </BrowserRouter>
        );
    });

    describe('When it has been rendered', () => {
        test('Then the movie tab should appear selected', () => {
            const favoritesTab = screen.getAllByRole('tab');
            expect(favoritesTab[0]).toHaveAttribute('aria-selected', 'true');
        });
    });
});
