import { render } from '@testing-library/react';
import { JoinUsCTA } from '../../../components/JoinUsCTA/JoinUsCTA';

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

describe("The Join Us CTA Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<JoinUsCTA />);

            expect(container).toMatchSnapshot()
        })
})

