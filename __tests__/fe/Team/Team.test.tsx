import { render } from '@testing-library/react';
import { Team } from '../../../components/Team/Team';

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

describe("The Team Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Team />);

            expect(container).toMatchSnapshot()
        })
})

