import { render } from '@testing-library/react';
import { HowItWorks } from '../../../components/HowItWorks/HowItWorks';

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

describe("The How It Works Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<HowItWorks />);

            expect(container).toMatchSnapshot()
        })
})

