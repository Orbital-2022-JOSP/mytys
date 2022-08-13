import { render } from '@testing-library/react';
import { Unauthenticated } from '../../../components/Unauthenticated/Unauthenticated';

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

describe("The Unauthenticated Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Unauthenticated />);

            expect(container).toMatchSnapshot()
        })
})

