import { render, screen } from '@testing-library/react';
import { Steps } from '../../../components/Steps/Steps';

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

describe("The Steps Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Steps />);

            expect(container).toMatchSnapshot()
            expect(screen.getByText("Our Simple Learning Process"))
                .toBeInTheDocument();
        })
})

