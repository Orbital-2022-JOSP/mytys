import { render, screen } from '@testing-library/react';
import { MailingList } from '../../../components/MailingList/MailingList';

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

describe("The Mailing List Component", () => {

    it('Should render correctly',
        async () => {
            const { container } = render(<MailingList />);

            expect(container).toMatchSnapshot()
            expect(screen.getByText("Receive weekly updates on exciting news or broadcasts on MYTYS and begin this journey with us!"))
                .toBeInTheDocument();
        })

    it('Should render the subscribe button',
        async () => {
            const { container } = render(<MailingList />);

            expect(screen.getByRole('button', { name: "Subscribe" }))
                .toBeInTheDocument();
        })
})

