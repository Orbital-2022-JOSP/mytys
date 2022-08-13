import { render } from '@testing-library/react';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';

jest.mock("next-auth/react", () => {
    const originalModule = jest.requireActual('next-auth/react');
    const mockSession = {};
    return {
        __esModule: true,
        ...originalModule,
        useSession: jest.fn(() => {
            return { data: mockSession, status: 'unauthenticated' }
        }),
    };
});

describe("The Loading Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<LoadingComponent />);

            expect(container).toMatchSnapshot()
        })
})

