import { render, screen } from '@testing-library/react';
import { Hero } from '../../../components/Hero/Hero';

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

describe("The Hero Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Hero />);

            expect(container).toMatchSnapshot()
            expect(screen.getByText("The MyTYS app provides a simple and convenient way to experience the benefits of private tuition"))
                .toBeInTheDocument();
        })

    it('Should render the enroll link',
        async () => {
            const { container } = render(<Hero />);

            expect(screen.getByRole('link', { name: "Enroll For Free" }))
                .toBeInTheDocument();
        })
})

describe("The Enroll For Free Link", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Hero />);

            expect(screen.getByRole('link', { name: "Enroll For Free" }))
                .toBeInTheDocument();
        })
})
