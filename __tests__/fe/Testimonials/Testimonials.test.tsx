import { render } from '@testing-library/react';
import { Testimonials } from '../../../components/Testimonials/Testimonials';

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

describe("The Testimonials Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<Testimonials />);

            expect(container).toMatchSnapshot()
        })
})

