import { render } from '@testing-library/react';
import { Profile } from '../../../components/Profile/Profile';

jest.mock("next-auth/react", () => {
    const originalModule = jest.requireActual('next-auth/react');
    const mockSession = {
        expires: new Date(Date.now() + 2 * 86400).toISOString(),
        user: {
            id: "123",
            userRole: "student",
            name: "John",
            email: "fake@email.com"
        }
    };
    return {
        __esModule: true,
        ...originalModule,
        useSession: jest.fn(() => {
            return { data: mockSession, status: 'authenticated' }
        }),
    };
});

describe("The Profile Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Profile />);

            expect(container).toMatchSnapshot()
        })
})
