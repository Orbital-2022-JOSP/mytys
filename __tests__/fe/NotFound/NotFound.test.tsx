import { render } from '@testing-library/react';
import { NotFound } from '../../../components/NotFound/NotFound';

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

describe("The Not Found Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<NotFound />);

            expect(container).toMatchSnapshot()
        })
})

