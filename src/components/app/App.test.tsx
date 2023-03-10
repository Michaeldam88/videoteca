import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

describe('Given App component', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    describe('When it has been render', () => {
        test('Then its child components should be render also with its title', () => {
            const loginBtn = screen.getByRole('tab', {
                name: 'movie_filter',
            });
            expect(loginBtn).toBeInTheDocument();
        });
    });
});
