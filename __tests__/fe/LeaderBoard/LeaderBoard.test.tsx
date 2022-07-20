import { render } from '@testing-library/react';
import { LeaderBoard } from '../../../components/Leaderboard/Leaderboard';

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

describe("The LeaderBoard Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<LeaderBoard />);

            expect(container).toMatchSnapshot()
        })
})

