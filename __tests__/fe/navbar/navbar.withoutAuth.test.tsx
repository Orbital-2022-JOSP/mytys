import { render, screen } from '@testing-library/react';
import { Navbar } from '../../../components/Navbar/Navbar';

jest.mock("next-auth/react", () => {
    const originalModule = jest.requireActual('next-auth/react');
    const mockSession = {
        // expires: new Date(Date.now() + 2 * 86400).toISOString(),
        // user: {
        //     id: "123",
        //     userRole: "student",
        //     name: "John",
        //     email: "fake@email.com"
        // }
    };
    return {
        __esModule: true,
        ...originalModule,
        useSession: jest.fn(() => {
            return { data: mockSession, status: 'unauthenticated' }
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

describe("The How It Works Link", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "How it works" }))
                .toBeInTheDocument();
        })

    it('Should have the correct link',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "How it works" }))
                .toHaveAttribute('href', '/how-it-works');
        })
})

describe("The Aboutus Link", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "About us" }))
                .toBeInTheDocument();
        })

    it('Should have the correct link',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('link', { name: "About us" }))
                .toHaveAttribute('href', '/aboutus');
        })
})

describe("The Sign In Button", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Navbar />);

            expect(screen.getByRole('button', { name: "Sign In" }))
                .toBeInTheDocument();
        })
})