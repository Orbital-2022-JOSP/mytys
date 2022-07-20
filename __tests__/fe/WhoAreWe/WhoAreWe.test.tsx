import { render } from '@testing-library/react';
import { WhoAreWe } from '../../../components/WhoAreWe/WhoAreWe';

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

describe("The Who Are We Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<WhoAreWe />);

            expect(container).toMatchSnapshot()
        })
})

