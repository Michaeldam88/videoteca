import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

describe('Given App component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    });
    describe('When it has been render', () => {
        test('Then its child components should be render also with its title', () => {
            const headerTitle = screen.getByRole('heading', {
                name: 'Calculadora Transporte',
            });
            expect(headerTitle).toBeInTheDocument();
        });
        
    });
});
