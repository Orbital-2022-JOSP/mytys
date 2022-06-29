import { render, screen } from '@testing-library/react';
import { Navbar } from '../components/Navbar/Navbar';

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

describe("Navbar Component", () => {

    it('Show Log Out Button when has session',
        async () => {
            const { container } = render(<Navbar />);

            expect(container).toMatchSnapshot()
            expect(screen.getByText("Log Out")).toBeInTheDocument();
        })

})