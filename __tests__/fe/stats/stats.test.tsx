import { render } from '@testing-library/react';
import { Stats } from '../../../components/Stats/Stats';

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

describe("The Stats Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Stats />);

            expect(container).toMatchSnapshot()
        })
})

