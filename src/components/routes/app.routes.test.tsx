/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';

jest.mock('../../pages/home/home', () => {
    return () => <p>{'Test Home'}</p>;
});
jest.mock('../../pages/favorites/favorites', () => {
    return () => <p>{'Test Favorites'}</p>;
});

describe('Given AppRoutes Lazy component', () => {
    describe(`When we render the component 
                And the lazy route is home`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <MemoryRouter
                        initialEntries={['/home', '/favorites']}
                        initialIndex={0}
                    >
                        <AppRoutes />
                    </MemoryRouter>
                );
            });
        });
        test('Then it should display the HomePage', () => {
            const lazyElement = screen.getByText('Test Home');
            expect(lazyElement).toBeInTheDocument();
        });
    });

    describe(`When we render the component 
                And the lazy route is todo`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <MemoryRouter
                        initialEntries={['/home', '/favorites']}
                        initialIndex={1}
                    >
                        <AppRoutes />
                    </MemoryRouter>
                );
            });
        });
        test('Then it should display the favorites page', () => {
            const lazyElement = screen.getByText('Test Favorites');
            expect(lazyElement).toBeInTheDocument();
        });
    });
});
