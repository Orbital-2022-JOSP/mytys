import { render, screen } from '@testing-library/react';
import { Navbar } from '../../../components/Navbar/Navbar';

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

describe("The Navbar Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(container).toMatchSnapshot()
        })

    it('Should render the home link correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "Home" })).toBeInTheDocument();
        })

    it('Should render the courses link correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByText('Courses')).toBeInTheDocument();
        })

    it('Should render the quiz link correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByText('Quiz')).toBeInTheDocument();
        })

    it('Should render the leaderboard link correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByText('LeaderBoard')).toBeInTheDocument();
        })

    it('Show Log Out Button when has session',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByText("Log Out")).toBeInTheDocument();
        })
})

describe("The Home Link", () => {

    it('Should have the correct link',
        async () => {
            const { container } = render(<Navbar />);

            expect(container).toMatchSnapshot()
        })

    it('Should be clickable',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByText('Home')).toBeInTheDocument();
        })

    it('Should go to the right ',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByText('Home')).toBeInTheDocument();
        })

})
