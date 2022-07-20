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
})

describe("The Home Link", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "Home" }))
                .toBeInTheDocument();
        })

    it('Should have the correct link',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "Home" }))
                .toHaveAttribute('href', '/');
        })
})

describe("The Courses Link", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "Courses" }))
                .toBeInTheDocument();
        })

    it('Should have the correct link',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "Courses" }))
                .toHaveAttribute('href', '/courses');
        })
})

describe("The Quiz Link", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "Quiz" }))
                .toBeInTheDocument();
        })

    it('Should have the correct link',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "Quiz" }))
                .toHaveAttribute('href', '/questions/mcq/random');
        })
})

describe("The LeaderBoard Link", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "LeaderBoard" }))
                .toBeInTheDocument();
        })

    it('Should have the correct link',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "LeaderBoard" }))
                .toHaveAttribute('href', '/leaderboard');
        })
})

describe("The Sign Out Button", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('button', { name: "Sign Out" }))
                .toBeInTheDocument();
        })
})