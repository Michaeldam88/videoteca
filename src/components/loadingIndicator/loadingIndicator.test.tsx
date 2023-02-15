import { render, screen } from '@testing-library/react';
import { usePromiseTracker } from 'react-promise-tracker';
import LoadingIndicator from './loadingIndicator';

// jest.mock('react-promise-tracker');
// (usePromiseTracker as jest.Mock).mockResolvedValue(true);

jest.mock('react-promise-tracker', () => ({
    usePromiseTracker: jest.fn().mockReturnValue({
        promiseInProgress: true,
    }),
}));

describe('Given a loading indicator component-', () => {
    render(<LoadingIndicator />);

    describe('When it has been rendered', () => {
        test('Then its should render also with its image', () => {
            const spinnerDiv = screen.getByTitle('spinner');
            expect(spinnerDiv).toBeInTheDocument();
        });
    });
});

// describe('Given a loading indicator component', () => {
//     render(<LoadingIndicator />);

//     describe('When it has been rendered', () => {
//         test('Then its should render also with its image', () => {
//             const { queryByTitle, container } = render(<LoadingIndicator />);
//             const spinner = container.getElementsByClassName('spinner-modal');
//             expect(spinner[0]).toBeInTheDocument();
//         });
//     });
// });
