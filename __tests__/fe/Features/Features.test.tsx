import { render } from '@testing-library/react';
import { Features } from '../../../components/Features/Features';

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

describe("The Features Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Features />);

            expect(container).toMatchSnapshot()
        })
})

