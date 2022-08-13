import { render } from '@testing-library/react';
import { Footer } from '../../../components/Footer/Footer';

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

describe("The Footer Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Footer />);

            expect(container).toMatchSnapshot()
        })
})
