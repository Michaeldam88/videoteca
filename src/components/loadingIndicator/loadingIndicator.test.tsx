import { render, screen } from '@testing-library/react';

import LoadingIndicator from './loadingIndicator';

describe('Given a loading indicator component', () => {
    render(<LoadingIndicator />);

    describe('When it has been rendered', () => {
        test('Then its should render also with its image', () => {
            const spinnerDiv = screen.getByTitle('spinner');
            expect(spinnerDiv).toBeInTheDocument();
        });
    });
});
