import { render } from '@testing-library/react';
import { ServerError } from '../../../components/ServerError/ServerError';

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

describe("The Server Error Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<ServerError />);

            expect(container).toMatchSnapshot()
        })
})

