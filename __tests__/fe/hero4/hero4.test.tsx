import { render, screen } from '@testing-library/react';
import { Hero4 } from '../../../components/Hero4/Hero4';

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

describe("The Hero4 Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Hero4 />);

            expect(container).toMatchSnapshot()
            expect(screen.getByText("The MyTYS app provides a simple and convenient way to experience the benefits of private tuition"))
                .toBeInTheDocument();
        })

    it('Should render the enroll link',
        async () => {
            const { container } = render(<Hero4 />);

            expect(screen.getByRole('link', { name: "Enroll For Free" }))
                .toBeInTheDocument();
        })
})

describe("The Enroll For Free Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Hero4 />);

            expect(screen.getByRole('link', { name: "Enroll For Free" }))
                .toBeInTheDocument();
        })
})
